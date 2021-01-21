interface ApplicationState {
  repos: Repo[] 
  searchFieldText: string;
  myStarsMode: boolean
}

interface InputInterface {
  value: string;
  update: textUpdateFunction;
  placeholder: string
}

interface ButtonInterface {
  actuate: (e : {}) => void;
  content: string
}

type textUpdateFunction = (e: { target: { value: string } }) => void;

interface Repo {
  name: string
  id: number
  description: string
  "stargazers_count": number
  language: string
  url: string
  isStarred?: boolean
}


type functionSideEffectOnly = (id: number) => void
