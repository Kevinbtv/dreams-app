import { useRef } from 'react'

import Card from '../../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const adressInputRef = useRef()
  const descriptionInputRef = useRef()

  function submiteHendler(e) {
    e.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAdress = adressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      adress: enteredAdress,
      description: enteredDescription
    }

    props.onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submiteHendler}>
        <div className={classes.control}>
          <label htmlFor="title">Local</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Imagem do Local (URL)</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="adress">País</label>
          <input type="text" required id="adress" ref={adressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Descrição</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Adicionar Local</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
