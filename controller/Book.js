import Book from "../model/Book.js"

export const createBook = (req, res) => {

    console.log(req.body);

    const newBook = new Book(req.body);

    newBook.save()
        .then(() => {
            res.status(201).json({"message":"Création du livre réussi"});
        })
        .catch((err) => {res.status(400).json(err)});
        
}

export const getAllBook = (req, res) => {
    Book.find({})
        .then(listBook => {
            res.status(200).json(listBook);
        })
        .catch(err => {
            res.status(400).json(err);
        });
}

export const getOneBook = (req, res) => {
    const id = req.params.id;

    Book.findOne({_id:id})
        .then(book => {
            console.log(book);
            res.status(200).json(book);
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

export const updateOneBook = (req, res) => {
    const id = req.params.id;

    Book.updateOne({_id:id}, req.body)
        .then(() => {
            res.status(200).json({message:"modification du livre réussie !", newBook:req.body})

        })
        .catch(err =>{
            res.status(500).json(err)
        });
}

export const deleteOneBook = (req, res) => {
    const id = req.params.id;

    Book.deleteOne({_id:id})
        .then(() => {
            res.status(200).json({message:"Suppression du livre réussie !"})
        })
        .catch(err => {
            res.status(500).json(err)
        });
};