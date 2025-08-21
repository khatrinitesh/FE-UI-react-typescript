import AnagramChecker from "../../components/anagramChecker/AnagramChecker";
import CamelCaseConverter from "../../components/camelCaseConverter/CamelCaseConverter";
import CharacterCountComponent from "../../components/characterCountComponent/CharacterCountComponent";
import FruitSumComponent from "../../components/fruitSumComponent/FruitSumComponent";
import MaxValueFinderComponent from "../../components/maxValueFinderComponent/MaxValueFinderComponent";
import RemoveCharacterComponent from "../../components/removeCharacterComponent/RemoveCharacterComponent";
import RepeatifyComponent from "../../components/repeatifyComponent/RepeatifyComponent";
import ReverseWordsComponent from "../../components/reverseWordsComponent/ReverseWordsComponent";
import SpeciesList from "../../components/speciesList/SpeciesList";

const HomePage = () => {
  return (
    <div className="homePage pageSpacing">
      <div className="container mx-auto">
        HomePage
        <SpeciesList />
        <FruitSumComponent />
        <CamelCaseConverter />
        <AnagramChecker />
        <RemoveCharacterComponent />
        <RepeatifyComponent />
        <MaxValueFinderComponent />
        <CharacterCountComponent />
        <ReverseWordsComponent />
      </div>
    </div>
  );
};

export default HomePage;
