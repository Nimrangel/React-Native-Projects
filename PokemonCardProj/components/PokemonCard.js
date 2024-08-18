import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🍀" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
    const {borderColor, emoji} = getTypeDetails(type)
  return (
    <View style={pokeStyles.card}>
      <View style={pokeStyles.nameContainer}>
        <Text style={pokeStyles.name}>{name}</Text>
        <Text style={pokeStyles.hp}>❤{hp}</Text>
      </View>
      <Image
        style={pokeStyles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />
      <View style={pokeStyles.typeContainer}>
        <View style={[pokeStyles.badge, {borderColor}]}>
         <Text style={pokeStyles.emoji}>{emoji}</Text>
            <Text style={pokeStyles.text}>{type}</Text>
        </View>
      </View>

      <View style={pokeStyles.moveContainer}>
        <Text style={pokeStyles.moveText}>Moves: {moves.join(",")}</Text>
      </View>

      <View style={pokeStyles.weaknessContainer}>
        <Text style={pokeStyles.weaknessText}>Weaknesses: {weaknesses.join(",")}</Text>
      </View>
    </View>
  );
}

const pokeStyles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer:{
    marginBottom: 40,
    alignItems:'center'
  },
  badge:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:6,
    paddingHorizontal:12,
    borderRadius:15,
    borderWidth: 4
  },
  typeEmoji:{
    fontSize:30,
    marginRight:12
  },
  typeText:{
    fontSize:22,
    fontWeight:'bold'
  },
  moveContainer:{
    marginBottom:16
  },
  moveText:{
    fontSize:22,
    fontWeight:'bold'
  },
  weaknessContainer:{
    marginBottom:8
  },
  weaknessText:{
    fontSize:22,
    fontWeight:'bold'
  }
});
