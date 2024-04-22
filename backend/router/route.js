import { Router } from 'express';
const router = Router();


/**  import controllers*/

import * as  controller from '../controllers/controller.js'
/**Questions routes api */

router.route('/questions')
    .get(controller.getQuestion)/**get request */
    .post(controller.insertQuestions)/**post request */
    .delete(controller.dropQuestions)/**delete request */



router.route('/result')
    .get(controller.getResult)/**get result */
    .post(controller.insertResult)
    .delete(controller.dropResult)

export default router;