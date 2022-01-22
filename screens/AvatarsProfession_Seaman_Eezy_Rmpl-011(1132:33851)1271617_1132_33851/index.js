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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276a/198c/2b2028c0fd267ae30752e039e7e95d70"
        }}
        style={styles.ImageBackground_1132_33852}
      />
      <View style={styles.View_1132_33854}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fce/5ad4/91ef3980741ff8084e2aeb36d4485bb8"
          }}
          style={styles.ImageBackground_1132_33855}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48a4/b589/cb6b6e52de9f76abc6e73738ec887d4c"
          }}
          style={styles.ImageBackground_1132_33958}
        />
        <View style={styles.View_1132_34065}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34066}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34067}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34068}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34069}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34070}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34071}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34072}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34073}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34074}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34075}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34076}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34077}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1132_34078}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/460b/36ff/fc5fa69ccb86e3bad7fe66810dc78284"
            }}
            style={styles.ImageBackground_1132_34079}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1be/f930/ad977c429e21f07f346da3d7b0809e1f"
            }}
            style={styles.ImageBackground_1132_34080}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a20d/116e/e860eb0870c6d6b57024b041ede024df"
            }}
            style={styles.ImageBackground_1132_34081}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4a5/2c0c/a1dec78b05605bc432b36f022526a3dd"
            }}
            style={styles.ImageBackground_1132_34082}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51b2/1c82/910d8f129e2cdacad71d95fd16c663a5"
            }}
            style={styles.ImageBackground_1132_34083}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf5e/022c/3d2f818a18bd38f644106b768682d0da"
            }}
            style={styles.ImageBackground_1132_34084}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2af/e3b1/5eaac819a7dbe7f9e9d33f312a7fcb0d"
            }}
            style={styles.ImageBackground_1132_34085}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8f9/f71b/0ed193a786f89240f47fbb327ea135a2"
            }}
            style={styles.ImageBackground_1132_34086}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5af3/ec1f/f9130e12bd57d2c8accc6cee5ae62dfa"
            }}
            style={styles.ImageBackground_1132_34087}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b37c/88b8/06be50c16254ad8105cd454765c80632"
            }}
            style={styles.ImageBackground_1132_34088}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a42d/3146/98f2c41d3ff0390b62e88a89fd98ffd0"
            }}
            style={styles.ImageBackground_1132_34089}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02f3/cf3d/7ae950831d8e55af4668a5f314c985f1"
            }}
            style={styles.ImageBackground_1132_34090}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f22e/0f35/749c7d080e30c7cdfc84433bbf933d48"
            }}
            style={styles.ImageBackground_1132_34091}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c7/3cc3/7d0a1accad0d780a675579c1e1d1a384"
            }}
            style={styles.ImageBackground_1132_34092}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ac/4610/73f77a99335c80470710c456b81d0d2f"
            }}
            style={styles.ImageBackground_1132_34093}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d96/6f2c/c4d870816071f6ed06533107af9e3391"
            }}
            style={styles.ImageBackground_1132_34094}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7378/0d09/a9cfd95fccaccdd9fb2b89bd95c11a10"
            }}
            style={styles.ImageBackground_1132_34095}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe6/0604/170230f5ea9b9bfa810cd0b308459983"
            }}
            style={styles.ImageBackground_1132_34096}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7378/0d09/a9cfd95fccaccdd9fb2b89bd95c11a10"
            }}
            style={styles.ImageBackground_1132_34130}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1929/e885/31af1179d0ccd0d9441f9688def93cc3"
          }}
          style={styles.ImageBackground_1132_34131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/208f/1d8f/d9befdd795573c22369fbe011c10b7ed"
          }}
          style={styles.ImageBackground_1132_34303}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c2f/3f71/42506bb380f24e8b6e2ab6117a952d88"
          }}
          style={styles.ImageBackground_1132_34432}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b89/1ba4/bed61a12134fb15d82d92a7ce95fbcad"
          }}
          style={styles.ImageBackground_1132_34503}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a657/14b0/e6b7a91830eec7e89f3b1a6419bc45f8"
          }}
          style={styles.ImageBackground_1132_34540}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("383%") },
  ImageBackground_1132_33852: {
    width: wp("100%"),
    height: hp("383%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1132_33854: {
    width: wp("88%"),
    height: hp("343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_33855: {
    width: wp("18%"),
    height: hp("81%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_1132_33958: {
    width: wp("18%"),
    height: hp("81%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_1132_34065: {
    width: wp("30%"),
    height: hp("232%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_34066: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_1132_34067: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1132_34068: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_1132_34069: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("180%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1132_34070: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1132_34071: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_1132_34072: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_1132_34073: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1132_34074: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("180%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_1132_34075: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_1132_34076: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_1132_34077: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_1132_34078: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_1132_34079: {
    width: wp("12%"),
    height: hp("29%"),
    top: hp("203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1132_34080: {
    width: wp("4%"),
    height: hp("27%"),
    top: hp("205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_1132_34081: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_1132_34082: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1132_34083: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_1132_34084: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1132_34085: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_1132_34086: {
    width: wp("8%"),
    height: hp("25%"),
    top: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1132_34087: {
    width: wp("7%"),
    height: hp("15%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1132_34088: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_1132_34089: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_1132_34090: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1132_34091: {
    width: wp("9%"),
    height: hp("26%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1132_34092: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("220%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1132_34093: {
    width: wp("2%"),
    height: hp("24%"),
    top: hp("203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1132_34094: {
    width: wp("2%"),
    height: hp("24%"),
    top: hp("203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_1132_34095: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1132_34096: {
    width: wp("30%"),
    height: hp("232%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_34130: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_1132_34131: {
    width: wp("30%"),
    height: hp("120%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_34303: {
    width: wp("88%"),
    height: hp("232%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_34432: {
    width: wp("18%"),
    height: hp("78%"),
    top: hp("154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_1132_34503: {
    width: wp("59%"),
    height: hp("343%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1132_34540: {
    width: wp("18%"),
    height: hp("78%"),
    top: hp("265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
