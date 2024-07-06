const response = await SubmissionProducer({
  [submission._id]: {
    code: submission.code,
    language: submission.language,
    inputCase: problemAdminApiResponse.data.testCases[0].input,
    outputCase: problemAdminApiResponse.data.testCases[0].output,
  },
});
return { queueResponse: response, submission };
