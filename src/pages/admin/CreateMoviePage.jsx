// import { useState } from "react"

// export default function CreateMoviePage() {

//     const [formData, setFormData] = useState({
//         title: '',
//         director: '',
//         genre: '',
//         release_year: '',
//         abstract: '',
//         image: '',
//     })

//     function handleSubmit() {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         //appendo i campi come il primo
//         formDataToSend.append('title', formData.title)
//         formDataToSend.append('director')
//         formDataToSend.append('genre')
//         formDataToSend.append('release_year')
//         formDataToSend.append('abstract')
//         formDataToSend.append('image')

//         console.log(formDataToSend.values())

//         fetch('api/movies', {
//             method: 'POST',
//             body: formDataToSend
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log('success:', data)
//             })
//             .cacth(err => {
//                 console.error('error: ', err)
//             })

//     }


//     return (
//         <div className="container">
//             <h1 className="my-5 mx-auto text-center">Aggiunta film singolo</h1>
//             <form action="" encType="multipart/form-data" className="my-5 card p-3" onSubmit={handleSubmit}>
//                 <div className="title mt-2 mb-4">
//                     <label htmlFor="title" className="form-label">Aggiungi un titolo</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="title"
//                         id="title"
//                         placeholder="Aggiungi un titolo..."
//                         value={formData.title}
//                         onChange={e => setFormData({ ...formData, title: e.target.value })} />
//                 </div>
//                 <div className="abstract mb-4">
//                     <label htmlFor="abstract" className="form-label">Aggiungi una breve trama</label>
//                     <textarea className="form-control" name="abstract" id="abstract" rows='3'>
//                     </textarea>
//                 </div>
//                 <div>
//                     <label htmlFor="image" className="forma-label">Aggiungi un immagine</label>

//                 </div>
//             </form >
//         </div >
//     )
// }