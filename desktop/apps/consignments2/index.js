import * as routes from './routes'
import JSONPage from '../../components/json_page'
import adminOnly from '../../lib/admin_only'
import express from 'express'

const app = module.exports = express()
app.set('views', `${__dirname}/templates`)
app.set('view engine', 'jade')

const landing = new JSONPage({
  name: 'consignments2/landing',
  paths: {
    show: '/consign2',
    edit: '/consign2/edit'
  }
})

const { data, edit, upload } = require('../../components/json_page/routes')(landing)

app.get(landing.paths.show, adminOnly, routes.landingPage)
app.get(landing.paths.show + '/data', adminOnly, data)
app.get(landing.paths.edit, adminOnly, edit)
app.post(landing.paths.edit, adminOnly, upload)
app.get('/consign2/submission/:id/describe-your-work', routes.submissionFlowWithFetch)
app.get('/consign2/submission/:id/upload-photos', routes.submissionFlowWithFetch)
app.get('/consign2/submission/:id/thank-you', adminOnly, routes.submissionFlowWithId)
app.get('/consign2/submission/:id/upload', adminOnly, routes.submissionFlowWithId)
app.get('/consign2/submission', routes.submissionFlow)
app.get('/consign2/submission/create-account', routes.redirectToSubmissionFlow)
app.get('/consign2/submission/choose-artist', routes.redirectToSubmissionFlow)
app.get('/consign2/submission/describe-your-work', routes.redirectToSubmissionFlow)
app.get('/consign2/submission/upload-photos', routes.redirectToSubmissionFlow)
