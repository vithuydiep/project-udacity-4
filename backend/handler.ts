module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'gooooo',
        input: event
      },
      null,
      2
    )
  }
}
