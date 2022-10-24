import * as url from "../url_helper"

import {
  chats,
  contacts,
  groups,
  users as members,
  messages,
  userProfile,
} from "../../common/data"

import MockAdapter from "axios-mock-adapter"
import accessToken from "../jwt-token-access/accessToken"
import axios from "axios"

let users = [
  {
    uid: 1,
    username: "admin",
    role: "admin",
    password: "123456",
    email: "admin@themesbrand.com",
  },
]

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

  mock.onPost(url.POST_FAKE_REGISTER).reply(config => {
    const user = JSON.parse(config["data"])
    users.push(user)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user])
      })
    })
  })

  mock.onPost("/post-fake-login").reply(config => {
    const user = JSON.parse(config["data"])
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    )

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          resolve([200, validUser[0]])
        } else {
          reject([
            "Username and password are invalid. Please enter correct username and password",
          ])
        }
      })
    })
  })

  mock.onPost("/fake-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."])
      })
    })
  })

  mock.onPost("/post-jwt-register").reply(config => {
    const user = JSON.parse(config["data"])
    users.push(user)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user])
      })
    })
  })

  mock.onPost("/post-jwt-login").reply(config => {
    const user = JSON.parse(config["data"])
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    )

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken

          // JWT AccessToken
          const tokenObj = { accessToken: token } // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj } // validUser Obj

          resolve([200, validUserObj])
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ])
        }
      })
    })
  })

  mock.onPost("/post-jwt-profile").reply(config => {
    const user = JSON.parse(config["data"])

    const one = config.headers

    let finalToken = one.Authorization

    const validUser = users.filter(usr => usr.uid === user.idx)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex(obj => obj.uid === user.idx)

            //Update object's name property.
            users[objIndex].username = user.username

            // Assign a value to locastorage
            localStorage.removeItem("authUser")
            localStorage.setItem("authUser", JSON.stringify(users[objIndex]))

            resolve([200, "Profile Updated Successfully"])
          } else {
            reject([400, "Something wrong for edit profile"])
          }
        } else {
          reject([400, "Invalid Token !!"])
        }
      })
    })
  })

  mock.onPost("/post-fake-profile").reply(config => {
    const user = JSON.parse(config["data"])
    console.log("validUser",user)

    const validUser = users.filter(usr => usr.uid === user.idx)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          let objIndex

          //Find index of specific object using findIndex method.
          objIndex = users.findIndex(obj => obj.uid === user.idx)

          //Update object's name property.
          users[objIndex].username = user.username

          // Assign a value to locastorage
          localStorage.removeItem("authUser")
          localStorage.setItem("authUser", JSON.stringify(users[objIndex]))

          resolve([200, "Profile Updated Successfully"])
        } else {
          reject([400, "Something wrong for edit profile"])
        }
      });
    });
  });

  mock.onPost("/jwt-forget-pwd").reply(config => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."])
      })
    })
  })

  mock.onPost("/social-login").reply(config => {
    const user = JSON.parse(config["data"])

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken

          // JWT AccessToken
          const tokenObj = { accessToken: token } // Token Obj
          const validUserObj = { ...user[0], ...tokenObj } // validUser Obj

          resolve([200, validUserObj])
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ])
        }
      })
    })
  })

  mock.onPost(url.ADD_NEW_USER).reply(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data])
        } else {
          reject([400, "Cannot add user"])
        }
      })
    })
  })

  mock.onPut(url.UPDATE_USER).reply(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data])
        } else {
          reject([400, "Cannot update user"])
        }
      })
    })
  })

  mock.onDelete(url.DELETE_USER).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.user])
        } else {
          reject([400, "Cannot delete user"])
        }
      })
    })
  })

  mock.onGet(url.GET_CHATS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chats) {
          // Passing fake JSON data as response
          resolve([200, chats])
        } else {
          reject([400, "Cannot get chats"])
        }
      })
    })
  })

  mock.onGet(url.GET_GROUPS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (groups) {
          // Passing fake JSON data as response
          resolve([200, groups])
        } else {
          reject([400, "Cannot get groups"])
        }
      })
    })
  })

  mock.onGet(url.GET_CONTACTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contacts) {
          // Passing fake JSON data as response
          resolve([200, contacts])
        } else {
          reject([400, "Cannot get contacts"])
        }
      })
    })
  })

  mock.onGet(new RegExp(`${url.GET_MESSAGES}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (messages) {
          // Passing fake JSON data as response
          const { params } = config
          const filteredMessages = messages.filter(
            msg => msg.roomId === params.roomId
          )

          resolve([200, filteredMessages])
        } else {
          reject([400, "Cannot get messages"])
        }
      })
    })
  })

  mock.onPost(url.ADD_MESSAGE).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config.data) {
          // Passing fake JSON data as response
          resolve([200, config.data])
        } else {
          reject([400, "Cannot add message"])
        }
      })
    })
  })

  

  mock.onGet(url.GET_USERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (members) {
          // Passing fake JSON data as response
          resolve([200, members])
        } else {
          reject([400, "Cannot get users"])
        }
      })
    })
  })

  mock.onGet(url.GET_USER_PROFILE).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userProfile) {
          // Passing fake JSON data as response
          resolve([200, userProfile])
        } else {
          reject([400, "Cannot get user profile"])
        }
      })
    })
  })

  mock.onPost(new RegExp(`${url.ON_LIKNE_COMMENT}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { data } = config
      const { params } = JSON.parse(data)

      setTimeout(() => {
        if (productComments) {
          var modifiedProductComments = [...productComments]
          const commentIdx = (modifiedProductComments || []).findIndex(
            comment =>
              comment.commentId.toString() === params.commentId.toString()
          )
          if (commentIdx > -1) {
            if (
              params.replyId &&
              modifiedProductComments[commentIdx]["replies"]
            ) {
              const replyIdx = (
                modifiedProductComments[commentIdx]["replies"] || []
              ).findIndex(
                reply => reply.replyId.toString() === params.replyId.toString()
              )

              if (replyIdx > -1) {
                if (
                  modifiedProductComments[commentIdx]["replies"][replyIdx][
                  "hasLiked"
                  ]
                ) {
                  modifiedProductComments[commentIdx]["replies"][replyIdx][
                    "hasLiked"
                  ] = false
                } else {
                  modifiedProductComments[commentIdx]["replies"][replyIdx][
                    "hasLiked"
                  ] = true
                }
              }
            } else {
              if (modifiedProductComments[commentIdx]["hasLiked"]) {
                modifiedProductComments[commentIdx]["hasLiked"] = false
              } else {
                modifiedProductComments[commentIdx]["hasLiked"] = true
              }
            }
          }

          // Passing fake JSON data as response
          resolve([200, modifiedProductComments])
        } else {
          reject([400, "Cannot add comment"])
        }
      })
    })
  })

  mock.onPost(new RegExp(`${url.ON_ADD_REPLY}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { data } = config
      const { params } = JSON.parse(data)

      setTimeout(() => {
        if (productComments) {
          const modifiedComments = [...productComments]
          const commentIdx = (modifiedComments || []).findIndex(
            comment =>
              comment.commentId.toString() === params.commentId.toString()
          )
          const today = new Date()
          const mins = today.getMinutes()
          if (commentIdx > -1) {
            var newReplyId = 1
            if (
              modifiedComments[commentIdx]["replies"] &&
              modifiedComments[commentIdx]["replies"].length
            ) {
              const totalReplies = modifiedComments[commentIdx]["replies"]
              newReplyId = totalReplies[totalReplies.length - 1] + 1
              const replyObj = {
                commentId: params.commentId,
                replyId: newReplyId,
                user: {
                  name: "Admin",
                  profile: "avatar1",
                },
                comment: params.replyText,
                time: `${mins} mins ago`,
                hasLiked: false,
              }
              modifiedComments[commentIdx]["replies"].push({ ...replyObj })
              modifiedComments[commentIdx]["showAddComment"] = false
            } else {
              modifiedComments[commentIdx]["replies"] = []
              const replyObj = {
                commentId: params.commentId,
                replyId: newReplyId,
                user: {
                  name: "Admin",
                  profile: "avatar1",
                },
                comment: params.replyText,
                time: `${mins} mins ago`,
                hasLiked: false,
              }
              modifiedComments[commentIdx]["replies"].push({ ...replyObj })
            }
          }

          // Passing fake JSON data as response
          resolve([200, modifiedComments])
        } else {
          reject([400, "Cannot add comment"])
        }
      })
    })
  })

  mock.onPost(new RegExp(`${url.ON_ADD_COMMENT}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      const { data } = config
      const { params } = JSON.parse(data)

      setTimeout(() => {
        if (productComments) {
          const modifiedComments = [...productComments]

          const today = new Date()
          const mins = today.getMinutes()
          const commentObj = {
            commentId: modifiedComments.length + 1,
            user: {
              name: "Admin",
              profile: "avatar1",
            },
            comment: params.commentText,
            time: `${mins} mins ago`,
            hasLiked: false,
          }
          modifiedComments.push({ ...commentObj })
          productComments.push({ ...commentObj })

          // Passing fake JSON data as response
          resolve([200, modifiedComments])
        } else {
          reject([400, "Cannot add comment"])
        }
      })
    })
  })
}

export default fakeBackend
