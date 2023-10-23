import React, { useState } from 'react';
import axios from 'axios'

const bloomLevels = {
  Remembering: ['recall', 'define', 'list', 'memorize'],
  Understanding: ['comprehend', 'explain', 'interpret', 'summarize'],
  Applying: ['apply', 'solve', 'use'],
  Analyzing: ['analyze', 'compare', 'contrast', 'identify'],
  Evaluating: ['evaluate', 'judge', 'assess'],
  Creating: ['create', 'generate', 'design'],
};

function determineBloomsLevel(outcomeDescription) {
  const outcomeWords = outcomeDescription.split(/\s+/);
  const bloomCount = {};

  for (const level in bloomLevels) {
    bloomCount[level] = 0;
  }

  for (const word of outcomeWords) {
    for (const level in bloomLevels) {
      const keywords = bloomLevels[level];
      if (keywords.some(keyword => word.toLowerCase().includes(keyword))) {
        bloomCount[level]++;
      }
    }
  }

  let maxLevel = 'Remembering';
  for (const level in bloomCount) {
    if (bloomCount[level] > bloomCount[maxLevel]) {
      maxLevel = level;
    }
  }

  return maxLevel;
}

function BloomTaxonomyClassifier() {
  const [outcomeDescription, setOutcomeDescription] = useState('');
  const [bloomLevel, setBloomLevel] = useState('');
  const [outcomes, setOutcomes] = useState([]);
  const [levelCounts, setLevelCounts] = useState({
    Remembering: 0,
    Understanding: 0,
    Applying: 0,
    Analyzing: 0,
    Evaluating: 0,
    Creating: 0,
  });

  const handleDescriptionChange = (e) => {
    setOutcomeDescription(e.target.value);
  };

  const handleClassification = () => {
    const level = determineBloomsLevel(outcomeDescription);
    setBloomLevel(level);
    setOutcomes([...outcomes, { description: outcomeDescription, level }]);
    setOutcomeDescription('');

    // Update level counts
    setLevelCounts((prevCounts) => ({
      ...prevCounts,
      [level]: prevCounts[level] + 1,
    }));
  };

  const handleSubmitButton = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/blooms",{levelCounts})
      .then(res => console.log("Data is Moved"))
      .catch(err => console.error(err));
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Bloom's Taxonomy Classifier</h1>
      <form onSubmit={handleSubmitButton} className="space-y-4">
        <input
          type="text"
          placeholder="Enter the course or project outcome description..."
          value={outcomeDescription}
          onChange={handleDescriptionChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          onClick={handleClassification}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Classify
        </button>
        <table className="w-full border-2">
          <thead>
            <tr>
              <th className="border">Outcome Description</th>
              <th className="border">Taxonomy Level</th>
            </tr>
          </thead>
          <tbody>
            {outcomes.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{item.description}</td>
                <td className={`border p-2 ${item.level.toLowerCase()}`}>
                  {item.level}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Check
        </button>
      </form>
    </div>
  );
}

export default BloomTaxonomyClassifier;
