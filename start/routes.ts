/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import User from '#models/user'
import queue from "@rlanz/bull-queue/services/main";
import SayHelloJob from "../app/jobs/say_hello_job.js";

router.on('/').render('pages/home')

router.get('/users', async () => {
  const user = new User()
  user.fullName = 'Anish Ghimire'
  user.email = `anish${Date.now()}@cleavr.io`
  user.password = 'password'
  await user.save()
  console.log('User created', user.email)

  const users = await User.all()
  console.log(
    'Available users',
    users.map((u) => u.email)
  )
  await queue.dispatch(SayHelloJob, {}, {})
})
