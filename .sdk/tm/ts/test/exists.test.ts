
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DetectionRunsDatasetSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = DetectionRunsDatasetSDK.test()
    equal(testsdk instanceof DetectionRunsDatasetSDK, true,
      'DetectionRunsDatasetSDK.test() must return a client synchronously')
  })

})
