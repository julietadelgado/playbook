class PullRequest {
  constructor(title, author, branchName, dateCreated, status, repositoryNameAssociated){
    this.title = title
    this.author = author
    this.branchName = branchName
    this.dateCreated = dateCreated
    this.status = status
    this.repositoryNameAssociated = repositoryNameAssociated
  }

  get getStatus(){
    return this.status
  }

  set setStatus(status){
    this.status = status
  }

  getTitleAndAutor(){
    return `The pull request ${this.title} was created by ${this.author}`
  }
}

const pull_request = new PullRequest("Adding article to LaunchX", "julietadelgado", "master", new Date(), "Open", "LaunchX")
console.log("Pull request name: " + pull_request.title)
console.log("Pull request was created on: " + pull_request.dateCreated)
console.log("Pull request "+ pull_request.title + " is associated to " + pull_request.repositoryNameAssociated + " repository")
pull_request.setStatus = 'Closed'
console.log("Pull request status: " + pull_request.getStatus)
console.log(pull_request.getTitleAndAutor()) 