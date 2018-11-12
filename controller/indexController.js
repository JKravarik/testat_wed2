import {database} from '../services/database.js'


export class indexController {


    newNote(req, res) {
        res.redirect("/newNote")
    }

}



export const indexController = new IndexController();

