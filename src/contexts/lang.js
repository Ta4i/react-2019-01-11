import {createContext} from 'react';

export const lang = {
  eng: {
    btn: {
      delete: "Delete",
      hideComments: "hide comments",
      showComments: "show comments",
      submit: "submit"
    },
    info: {
      noCommentsYet: "No comments yet"
    },
    label: {
      user: "user",
      comment: "comment"
    }
  },
  rus: {
    btn: {
      delete: "Удалить",
      hideComments: "скрыть комментарии",
      showComments: "показать комментарии",
      submit: "отправить"
    },
    info: {
      noCommentsYet: "Комментариев пока нет"
    },
    label: {
      user: "пользователь",
      comment: "комментарий"
    }
  }
}

const { Provider, Consumer } = createContext(lang.eng)

export { Provider, Consumer }
