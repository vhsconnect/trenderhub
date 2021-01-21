const { configure, mount } = require("enzyme");
const RepoCard = require("../../src/components/RepoCard");
const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

const mockClick = jest.fn();

const repo = {
  name: "haskell-lib",
  id: "1234",
  stargazers_count: 54,
  description: "test",
  isStarred: false,
  language: "haskell"
};

const wrapper = mount(RepoCard);
wrapper.setProps({
  repo,
  updateStarredRepos: mockClick
});

describe("RepoCard", () => {
  describe("Button event", () => {
    test("when clicked, callback is called with repo id", () => {
      wrapper.find("button").simulate("click");
      expect(mockClick).toBeCalledWith(54);
    });
  });
});
