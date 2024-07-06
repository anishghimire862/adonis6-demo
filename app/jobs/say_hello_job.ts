import { Job } from '@rlanz/bull-queue'

interface SayHelloJobPayload {}

export default class SayHelloJob extends Job {
  // This is the path to the file that is used to create the job
  static get $$filepath() {
    return import.meta.url
  }

  /**
   * Base Entry point
   */
  async handle(_payload: SayHelloJobPayload) {
    console.log('Hello World from Cleavr.io')
  }

  /**
   * This is an optional method that gets called when the retries has exceeded and is marked failed.
   */
  async rescue(_payload: SayHelloJobPayload) {
  }
}
