import { useState, useEffect } from 'react'
import { postDiscussionApi } from '../api/postDiscussionApi'

export function AddQuestion({ setData, cnt }) {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')



  const submitButton = () => {
    const newDiscuss = {
      id: cnt + 1,
      createdAt: new Date(),
      author: name,
      title,
      bodyHTML: question,
      avatarUrl: 'https://item.kakaocdn.net/do/fc3d7a6ee445d1c1a2d1a7c412ee5987f43ad912ad8dd55b04db6a64cddaf76d'
    }

    setData(newDiscuss)

  }

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  const changeQuestion = (e) => {
    setQuestion(e.target.value)
  }


  return <section className="form__container form">
    <div className="form__input--wrapper">
      <div className="form__input--name">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" onChange={changeName} value={name} />
      </div>
      <div className="form__input--title">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" placeholder="제목을 입력하세요" onChange={changeTitle} value={title} />
      </div>
      <div className="form__textbox">
        <label htmlFor="story">Question: </label>
        <textarea id="story" name="story" placeholder="질문을 작성하세요" onChange={changeQuestion} value={question}></textarea>
      </div>
    </div>
    <div className="form__submit">
      <input type="submit" value="submit" id="submit" onClick={submitButton} />
    </div>
  </section>
}