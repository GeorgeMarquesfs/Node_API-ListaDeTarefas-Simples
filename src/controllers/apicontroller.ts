import { Request, Response} from 'express';
import { Lista } from '../models/ListaT'


export const getListaT =  async (req: Request, res: Response) => {
    const list = await Lista.findAll();
    res.json({ list });
    res.status(201);
} 

export const postListaT =  async (req: Request, res: Response) => {
    if (req.body.title){
        
        let newList = await Lista.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });

        res.status(201).json({ item : newList})

    } else  {
        res.json({error: "Dados não enviados"})
    }
}

export const putListaT =  async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let list = await Lista.findByPk(id);
    if (list){
        
        if(req.body.title){
            list.title = req.body.title;
        } 
        if(req.body.done){
            switch(req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    list.done = true;
                    break
                case 'false':
                case '0':
                    list.done = false;
                    break;
            }
        }
       
        await list.save();
        res.json({ item : list})

    } else {
        res.json({error: 'Item não encontrado!'})
    }

}

export const removeListaT = async (req: Request, res: Response) => {
    let id: string  = req.params.id;
    await Lista.destroy({ where: { id }  });

    res.json({});
}