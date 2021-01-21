interface ApplicationState {
  searchFieldText: string;
}

interface InputInterface {
  value: string;
  update: textUpdateFunction;
}

interface ButtonInterface {
  actuate: () => void;
  content: string
}

type textUpdateFunction = (e: { target: { value: string } }) => void;

interface Repo {
  name: string
  id: string
  description: string
  "stargazers_count": number
  language: string
  url: string
}
