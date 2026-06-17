function status(request, response) {
  response.status(200).json({msg: "Ok"});
}

export default status;