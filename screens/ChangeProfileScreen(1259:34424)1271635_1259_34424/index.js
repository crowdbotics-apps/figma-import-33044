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
      <View style={styles.View_1259_34425} />
      <View style={styles.View_1259_34495}>
        <View style={styles.View_1259_34496} />
        <View style={styles.View_1259_34497}>
          <Text style={styles.Text_1259_34497}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9977/2122/fc618a703aa833219dcdc8d09b7ebab9"
          }}
          style={styles.ImageBackground_1259_34498}
        />
      </View>
      <View style={styles.View_1259_34499}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34501}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a793/e758/728361fa16835aba50e68a15d1371026"
          }}
          style={styles.ImageBackground_1260_34834}
        />
        <View style={styles.View_1259_34503}>
          <Text style={styles.Text_1259_34503}>Anggota Baru</Text>
        </View>
      </View>
      <View style={styles.View_1259_34505}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34506}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34508}
        />
        <View style={styles.View_1259_34509}>
          <Text style={styles.Text_1259_34509}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34513}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34514}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34516}
        />
        <View style={styles.View_1259_34517}>
          <Text style={styles.Text_1259_34517}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34524}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34525}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34527}
        />
        <View style={styles.View_1259_34528}>
          <Text style={styles.Text_1259_34528}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34529}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34530}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34532}
        />
        <View style={styles.View_1259_34533}>
          <Text style={styles.Text_1259_34533}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34534}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34535}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34537}
        />
        <View style={styles.View_1259_34538}>
          <Text style={styles.Text_1259_34538}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34539}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/e6d4/665a51c13c2ee27b2ac1338fe8c1228f"
          }}
          style={styles.ImageBackground_1259_34540}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff69/d7f2/3a9897b7b7e17b867f7079604c81c885"
          }}
          style={styles.ImageBackground_1259_34542}
        />
        <View style={styles.View_1259_34543}>
          <Text style={styles.Text_1259_34543}>Anggota</Text>
        </View>
      </View>
      <View style={styles.View_1259_34778}>
        <View style={styles.View_1259_34779}>
          <View style={styles.View_1259_34780} />
          <View style={styles.View_1259_34781}>
            <Text style={styles.Text_1259_34781}>Anggota</Text>
          </View>
        </View>
        <View style={styles.View_1259_34782}>
          <View style={styles.View_1259_34783} />
          <View style={styles.View_1259_34784} />
          <View style={styles.View_1259_34785}>
            <Text style={styles.Text_1259_34785}>Izin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1259_34428}>
        <View style={styles.View_1259_34429} />
        <View style={styles.View_1259_34430}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1259_34431}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9861/c8d0/6d79933c975e3e9dfc5dafe6b996a0fd"
            }}
            style={styles.ImageBackground_1259_34440}
          />
        </View>
        <View style={styles.View_1259_34441}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1259_34442}
          />
          <View style={styles.View_1259_34452}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_I1259_34452_1258_33823}
            />
            <View style={styles.View_I1259_34452_1258_33826}>
              <View style={styles.View_I1259_34452_1258_33827}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c4/eb97/8a44a03d09ac584f77be20fd76f13db2"
                  }}
                  style={styles.ImageBackground_I1259_34452_1258_33828}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87ed/0424/72505560b37e2cedc254584642f507a0"
                  }}
                  style={styles.ImageBackground_I1259_34452_1258_33830}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3bc/753e/41a07ccc773911c9d4a918d76a64920b"
                  }}
                  style={styles.ImageBackground_I1259_34452_1258_33832}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c08/ebeb/c0bbabc2ce9664fe50bb20c4c7850d0e"
                  }}
                  style={styles.ImageBackground_I1259_34452_1258_33834}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1259_34453}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1259_34454}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f69/0d69/748f381d2d057a0889b33add1f111ada"
            }}
            style={styles.ImageBackground_1259_34455}
          />
        </View>
        <View style={styles.View_1259_34469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1259_34470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1259_34471}
          />
          <View style={styles.View_1259_34474}>
            <View style={styles.View_1259_34475}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/c666/22daf8e324a70cb98be1ef368562f11c"
                }}
                style={styles.ImageBackground_1259_34479}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1259_34482}>
          <View style={styles.View_1259_34483} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b94/7534/f9132fd909e19b4166e408ce8255025f"
            }}
            style={styles.ImageBackground_1259_34484}
          />
        </View>
      </View>
      <View style={styles.View_1260_34826}>
        <Text style={styles.Text_1260_34826}>Distribusi</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f98e/4d77/9bab9a303da615ff26018316c7712711"
        }}
        style={styles.ImageBackground_1260_34827}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1259_34425: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1259_34495: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%")
  },
  View_1259_34496: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(222, 222, 222, 1)",
    borderWidth: 0.5
  },
  View_1259_34497: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1259_34497: {
    color: "rgba(150, 155, 168, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_1259_34498: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1259_34499: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("28%")
  },
  ImageBackground_1259_34501: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1260_34834: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1259_34503: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34503: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34505: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("39%")
  },
  ImageBackground_1259_34506: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34508: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34509: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34509: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34513: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("49%")
  },
  ImageBackground_1259_34514: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34516: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34517: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34517: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34524: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("60%")
  },
  ImageBackground_1259_34525: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34527: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34528: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34528: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34529: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("70%")
  },
  ImageBackground_1259_34530: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34532: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34533: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34533: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34534: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("81%")
  },
  ImageBackground_1259_34535: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34537: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34538: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34538: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34539: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("91%")
  },
  ImageBackground_1259_34540: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34542: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1259_34543: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1259_34543: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34778: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_1259_34779: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1259_34780: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1259_34781: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1259_34781: {
    color: "rgba(73, 126, 254, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34782: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1259_34783: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1259_34784: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(73, 126, 254, 1)"
  },
  View_1259_34785: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1259_34785: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1259_34428: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93%")
  },
  View_1259_34429: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1259_34430: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  ImageBackground_1259_34431: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34440: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1259_34441: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  ImageBackground_1259_34442: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1259_34452: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1259_34452_1258_33823: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1259_34452_1258_33826: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I1259_34452_1258_33827: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1259_34452_1258_33828: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I1259_34452_1258_33830: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I1259_34452_1258_33832: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I1259_34452_1258_33834: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1259_34453: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  ImageBackground_1259_34454: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34455: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1259_34469: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34470: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1259_34471: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1259_34474: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1259_34475: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1259_34479: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1259_34482: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_1259_34483: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  ImageBackground_1259_34484: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1260_34826: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_1260_34826: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1260_34827: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
