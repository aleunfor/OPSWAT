const Threat = require('../models/Threat')
const router = require('express').Router()
const getThreats = require('../services/getThreats')
const logger = require('../logger_conf/logger')

// Get all Threats
router.get('/getallthreats', async (req, res) => {

    logger.info('(GET: /api/threat/getallthreats/) Getting All Threats from API...')

    // Fetch API
    getThreats.then(response => {
        response.forEach(async object => {
            const threat = new Threat({
                threat_id: object.data_id,
                threat_name: object.threat_name,
                start_time: object.start_time,
                file_type_extension: object.file_type_extension,
                counter: 1
            })

            const isThreatExist = await Threat.find({ threat_id: object.data_id }).count() > 0

            // If threat exists update counter +1
            if (isThreatExist) {
                await Threat.updateOne({ threat_id: object.data_id }, { $inc: { counter: 1 } })
                logger.info('Counter +1 of Threat ID: ' + object.data_id)
            } else {
                // Save the new threat
                const savedThreat = await threat.save()
                logger.info('New threat saved ' + object.data_id)
            }
        })
        res.json(response)
    }).catch(response => {
        logger.error(response)
    })
})

// Get Threat by ID
router.get('/getthreat/:id', async (req, res) => {

    const threat_id = req.params.id
    const isThreatExist = await Threat.findOne({ threat_id })

    logger.info(`(GET: /api/threat/getthreat/${threat_id}) Getting Threat...`)

    // If threat exists, send information
    if (isThreatExist) {
        logger.info('Threat: ' + isThreatExist)
        res.json(isThreatExist)
    } else {
        logger.error('Threat doesn\'t exist')
        res.json({
            'error': 'Threat doesn\'t exist'
        })
    }

})

// Delete Threat by ID
router.post('/deletethreat/:id', async (req, res) => {

    const threat_id = req.params.id
    const isThreatExist = await Threat.findOne({ threat_id })

    try {

        // If exists threat delete by id
        if (isThreatExist) {
            const isDeleted = await Threat.deleteOne({ threat_id: threat_id })
            if (isDeleted) {
                logger.info(`Threat ${threat_id} is deleted`)
                res.json({
                    'msg': `Threat ${threat_id} is deleted`
                })
            } else {
                logger.info('Error to delete threat')
                res.json({
                    'error': 'Error to delete threat'
                })
            }
        } else {
            logger.error('Threat doesn\'t exist')
            res.json({
                'error': 'Threat doesn\'t exist'
            })
        }

    } catch (e) {
        logger.error(e)
    }

})

module.exports = router