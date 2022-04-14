class Issue{
  constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status = status
    this.numberOfComments = numberOfComments
    this.labels = labels
    this.author = author
    this.dateCreated = dateCreated
    this.lastUpdated = lastUpdated
  }

  getTitleAndAuthor(){
    return `The issue ${this.title} was created by ${this.author}`
  }

  getGeneralInfo(){
    return `General info about issue ${this.title}:\nStatus: ${this.status}\nComments: ${this.numberOfComments}\nLabels: ${this.labels}\nCreated: ${this.dateCreated}\nLast Updated: ${this.lastUpdated}`
  }
}

const issue = new Issue("Unable to update branch", "LaunchX", "Open", 100, ['Github', 'Branch'], 'julietadelgado', '04/13/22', new Date())
console.log("Nombre del issue: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo()) 