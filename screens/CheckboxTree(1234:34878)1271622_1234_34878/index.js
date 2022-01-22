import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1234_34883}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b105/adca/59c0a67b8a5c63013ed8a8a5cfd8f048"
          }}
          style={styles.ImageBackground_1234_34884}
        />
        <View style={styles.View_1234_34885}>
          <Text style={styles.Text_1234_34885}>Buat Distribusi</Text>
        </View>
      </View>
      <View style={styles.View_1234_34886}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b105/adca/59c0a67b8a5c63013ed8a8a5cfd8f048"
          }}
          style={styles.ImageBackground_1234_34887}
        />
        <View style={styles.View_1234_34888}>
          <Text style={styles.Text_1234_34888}>Buat Distribusi</Text>
        </View>
      </View>
      <View style={styles.View_1234_34889}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b105/adca/59c0a67b8a5c63013ed8a8a5cfd8f048"
          }}
          style={styles.ImageBackground_1234_34890}
        />
        <View style={styles.View_1234_34891}>
          <Text style={styles.Text_1234_34891}>Pilih Orang</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e045/6f1e/0fd0b3506322718ed4f9d71370a0a462"
          }}
          style={styles.ImageBackground_1234_34892}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1234_34883: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%")
  },
  ImageBackground_1234_34884: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_1234_34885: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1234_34885: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34886: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("-5%")
  },
  ImageBackground_1234_34887: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_1234_34888: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1234_34888: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1234_34889: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%")
  },
  ImageBackground_1234_34890: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_1234_34891: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1234_34891: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1234_34892: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
