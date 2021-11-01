const layersOrder = [
    { name: 'bg', number: 6 },
    { name: 'layer4', number: 2 },
    { name: 'layer3', number: 3 },
    { name: 'layer2', number: 3 },
    { name: 'layer1', number: 3 },
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10;

module.exports = { layersOrder, format, rarity, defaultEdition };