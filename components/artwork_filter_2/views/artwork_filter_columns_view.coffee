Backbone = require 'backbone'
_ = require 'underscore'
query = require '../queries/filter_artworks.coffee'
metaphysics = require '../../../lib/metaphysics.coffee'
# setupSaveControls = require '../save_artworks/index.coffee'

template = -> require('./template.jade') arguments...
ViewHelpers = require '../helpers/view_helpers.coffee'

module.exports = class ArtworkColumnsView extends Backbone.View

  initialize: ({ @params, @artistID }) ->
    throw new Error 'Requires a params model' unless @params?
    @page = 1
    @size = 9
    @listenToOnce @params, 'firstSet', @fetch, reset: true
    # setupSaveControls @artworks
    $.onInfiniteScroll @infiniteScroll

    _.each @params.whitelisted, (param) =>
      @listenTo @params, "change:#{param}", @fetch, reset: true

  fetch: ({ reset }) ->
    return if @allFetched()

    if reset
      $.onInfiniteScroll @infiniteScroll
      @page = 1

    variables = _.extend artist_id: @artistID, page: @page, size: @size, @params.mapped()
    @set isFetching: true

    metaphysics({ query, variables })
      .then ({ filter_artworks }) =>
        fetchedArtworks = filter_artworks.hits
        @set isFetching: false

        if @page is 1
          @artworks = fetchedArtworks
          @total = filter_artworks.total
        else
          @artworks = @artworks.concat fetchedArtworks

        if @allFetched() || fetchedArtworks.length == 0
          $.destroyInfiniteScroll()
        else
          @page++

        @render()



  allFetched: ->
    @artworks.length >= @total

  infiniteScroll: =>
    return if @isFetching
    fold = $(window).height() + $(window).scrollTop()
    $lastItem = @$('.artwork-column').last()
    @fetch() unless fold < $lastItem.offset()?.top + $lastItem.height()

  render: ->
    artworkColumns = ViewHelpers.groupByColumnsInOrder(@artworks)
    @$el.html template
      artworkColumns: artworkColumns
      ViewHelpers: ViewHelpers
    # setupSaveControls @artworks
    this


