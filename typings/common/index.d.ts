interface ApplicationState {
  searchFieldText: string
}

interface InputInterface {
  value: string;
  update: textUpdateFunction
}

type textUpdateFunction = (e : {target : { value: string }}) => void





