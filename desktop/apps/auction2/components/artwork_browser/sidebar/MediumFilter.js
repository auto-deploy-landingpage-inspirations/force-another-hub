import BasicCheckbox from './BasicCheckbox'
import PropTypes from 'prop-types'
import React from 'react'
import _, { contains } from 'underscore'
import { connect } from 'react-redux'
import { updateMediumParams } from 'desktop/apps/auction2/actions/filter'

function MediumFilter (props) {
  const {
    aggregatedMediums,
    allMediums,
    mediumIds,
    updateMediumParamsAction,
    allMediumsSelected,
    initialMediumMap
  } = props

  return (
    <div className='auction2-medium-checkboxes'>
      <div className='auction2-medium-checkboxes__title'>Medium</div>
      <BasicCheckbox
        key={allMediums.id}
        item={allMediums}
        onClick={updateMediumParamsAction}
        checked={allMediumsSelected}
      />
      {
        _.map(initialMediumMap, (initialAgg) => {
          const mediumSelected = contains(mediumIds, initialAgg.id)
          const includedMedium = _.find(aggregatedMediums, (agg) => agg.id === initialAgg.id)
          return (
            <BasicCheckbox
              key={initialAgg.id}
              item={{
                id: initialAgg.id,
                name: initialAgg.name,
                count: includedMedium && includedMedium.count
              }}
              onClick={updateMediumParamsAction}
              checked={mediumSelected}
              disabled={includedMedium === undefined}
            />
          )
        })
      }
    </div>
  )
}

MediumFilter.propTypes = {
  aggregatedMediums: PropTypes.array.isRequired,
  allMediums: PropTypes.object.isRequired,
  allMediumsSelected: PropTypes.bool.isRequired,
  initialMediumMap: PropTypes.array.isRequired,
  mediumIds: PropTypes.array.isRequired,
  updateMediumParamsAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const {
    auctionArtworks: {
      aggregatedMediums,
      filterParams,
      initialMediumMap
    }
  } = state

  const mediumIds = filterParams.gene_ids
  const allMediums = { id: 'mediums-all', name: 'All' }
  const allMediumsSelected = mediumIds.length === 0

  return {
    aggregatedMediums,
    allMediums,
    mediumIds,
    allMediumsSelected,
    initialMediumMap
  }
}

const mapDispatchToProps = {
  updateMediumParamsAction: updateMediumParams
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediumFilter)

export const test = { MediumFilter }
