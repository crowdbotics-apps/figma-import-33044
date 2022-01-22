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
      <View style={styles.View_1122_32102}>
        <View style={styles.View_1122_32103}>
          <View style={styles.View_I1122_32103_102_2766}>
            <View style={styles.View_I1122_32103_102_2766_1_9}>
              <Text style={styles.Text_I1122_32103_102_2766_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32103_102_2767}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31571"))
            }
          />
          <View style={styles.View_I1122_32103_102_2768}>
            <View style={styles.View_I1122_32103_102_2768_1_97}>
              <Text style={styles.Text_I1122_32103_102_2768_1_97}>
                DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32104}>
          <View style={styles.View_I1122_32104_108_204}>
            <View style={styles.View_I1122_32104_108_204_1_2}>
              <Text style={styles.Text_I1122_32104_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32104_108_205}>
            <View style={styles.View_I1122_32104_108_205_1_113}>
              <Text style={styles.Text_I1122_32104_108_205_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32104_108_206}>
            <View style={styles.View_I1122_32104_108_206_1_97}>
              <Text style={styles.Text_I1122_32104_108_206_1_97}>
                DAPIL DPR👍🚩
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32105}>
          <View style={styles.View_I1122_32105_108_76}>
            <View style={styles.View_I1122_32105_108_76_1_9}>
              <Text style={styles.Text_I1122_32105_108_76_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32105_108_77}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31559"))
            }
          >
            <View style={styles.View_I1122_32105_108_77_2_193}>
              <Text style={styles.Text_I1122_32105_108_77_2_193}></Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I1122_32105_108_78}>
            <View style={styles.View_I1122_32105_108_78_1_97}>
              <Text style={styles.Text_I1122_32105_108_78_1_97}>
                DAPIL DPRD🎁🚩
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32106}>
          <View style={styles.View_I1122_32106_108_204}>
            <View style={styles.View_I1122_32106_108_204_1_2}>
              <Text style={styles.Text_I1122_32106_108_204_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32106_108_205}>
            <View style={styles.View_I1122_32106_108_205_1_113}>
              <Text style={styles.Text_I1122_32106_108_205_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32106_108_206}>
            <View style={styles.View_I1122_32106_108_206_1_97}>
              <Text style={styles.Text_I1122_32106_108_206_1_97}>
                DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32107}>
          <View style={styles.View_I1122_32107_108_208}>
            <View style={styles.View_I1122_32107_108_208_1_2}>
              <Text style={styles.Text_I1122_32107_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32107_108_209}>
            <View style={styles.View_I1122_32107_108_209_1_113}>
              <Text style={styles.Text_I1122_32107_108_209_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32107_108_210}>
            <View style={styles.View_I1122_32107_108_210_1_97}>
              <Text style={styles.Text_I1122_32107_108_210_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32108}>
          <View style={styles.View_I1122_32108_108_212}>
            <View style={styles.View_I1122_32108_108_212_1_2}>
              <Text style={styles.Text_I1122_32108_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32108_108_213}>
            <View style={styles.View_I1122_32108_108_213_1_113}>
              <Text style={styles.Text_I1122_32108_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32108_108_214}>
            <View style={styles.View_I1122_32108_108_214_1_97}>
              <Text style={styles.Text_I1122_32108_108_214_1_97}>
                DAPIL KOTA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32109}>
          <View style={styles.View_I1122_32109_108_212}>
            <View style={styles.View_I1122_32109_108_212_1_2}>
              <Text style={styles.Text_I1122_32109_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32109_108_213}>
            <View style={styles.View_I1122_32109_108_213_1_113}>
              <Text style={styles.Text_I1122_32109_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32109_108_214}>
            <View style={styles.View_I1122_32109_108_214_1_97}>
              <Text style={styles.Text_I1122_32109_108_214_1_97}>
                KECAMATAN
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32110}>
          <View style={styles.View_I1122_32110_108_212}>
            <View style={styles.View_I1122_32110_108_212_1_2}>
              <Text style={styles.Text_I1122_32110_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32110_108_213}>
            <View style={styles.View_I1122_32110_108_213_1_113}>
              <Text style={styles.Text_I1122_32110_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32110_108_214}>
            <View style={styles.View_I1122_32110_108_214_1_97}>
              <Text style={styles.Text_I1122_32110_108_214_1_97}>
                KELURAHAN
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32111}>
          <View style={styles.View_I1122_32111_108_212}>
            <View style={styles.View_I1122_32111_108_212_1_2}>
              <Text style={styles.Text_I1122_32111_108_212_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32111_108_213}>
            <View style={styles.View_I1122_32111_108_213_1_113}>
              <Text style={styles.Text_I1122_32111_108_213_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32111_108_214}>
            <View style={styles.View_I1122_32111_108_214_1_97}>
              <Text style={styles.Text_I1122_32111_108_214_1_97}>RW🚩</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32112}>
          <View style={styles.View_1122_32113} />
          <View style={styles.View_1122_32114}>
            <Text style={styles.Text_1122_32114}>6</Text>
          </View>
        </View>
        <View style={styles.View_1122_32115}>
          <View style={styles.View_1122_32116} />
          <View style={styles.View_1122_32117}>
            <Text style={styles.Text_1122_32117}>15</Text>
          </View>
        </View>
        <View style={styles.View_1122_32118}>
          <View style={styles.View_1122_32119} />
          <View style={styles.View_1122_32120}>
            <Text style={styles.Text_1122_32120}>3</Text>
          </View>
        </View>
        <View style={styles.View_1122_32121}>
          <View style={styles.View_I1122_32121_108_148}>
            <View style={styles.View_I1122_32121_108_148_1_14}>
              <Text style={styles.Text_I1122_32121_108_148_1_14}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32121_108_149}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31683"))
            }
          >
            <View style={styles.View_I1122_32121_108_149_2_193}>
              <Text style={styles.Text_I1122_32121_108_149_2_193}></Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I1122_32121_108_150}>
            <View style={styles.View_I1122_32121_108_150_1_97}>
              <Text style={styles.Text_I1122_32121_108_150_1_97}>
                TPS👍🎁🌟🚩
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32122}>
          <View style={styles.View_I1122_32122_103_1044}>
            <View style={styles.View_I1122_32122_103_1044_1_9}>
              <Text style={styles.Text_I1122_32122_103_1044_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32122_103_1045}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31575"))
            }
          />
          <View style={styles.View_I1122_32122_103_1046}>
            <View style={styles.View_I1122_32122_103_1046_1_97}>
              <Text style={styles.Text_I1122_32122_103_1046_1_97}>
                🍦DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32123}>
          <View style={styles.View_I1122_32123_103_1044}>
            <View style={styles.View_I1122_32123_103_1044_1_9}>
              <Text style={styles.Text_I1122_32123_103_1044_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32123_103_1045}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31575"))
            }
          />
          <View style={styles.View_I1122_32123_103_1046}>
            <View style={styles.View_I1122_32123_103_1046_1_97}>
              <Text style={styles.Text_I1122_32123_103_1046_1_97}>
                🥐 DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32124}>
          <View style={styles.View_I1122_32124_108_208}>
            <View style={styles.View_I1122_32124_108_208_1_2}>
              <Text style={styles.Text_I1122_32124_108_208_1_2}></Text>
            </View>
          </View>
          <View style={styles.View_I1122_32124_108_209}>
            <View style={styles.View_I1122_32124_108_209_1_113}>
              <Text style={styles.Text_I1122_32124_108_209_1_113}>minus</Text>
            </View>
          </View>
          <View style={styles.View_I1122_32124_108_210}>
            <View style={styles.View_I1122_32124_108_210_1_97}>
              <Text style={styles.Text_I1122_32124_108_210_1_97}>
                🍒 DAPIL DPR
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_1122_32125}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1019_31579"))
          }
        >
          <View style={styles.View_I1122_32125_103_1051}>
            <View style={styles.View_I1122_32125_103_1051_1_9}>
              <Text style={styles.Text_I1122_32125_103_1051_1_9}></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I1122_32125_103_1052}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1019_31579"))
            }
          />
          <View style={styles.View_I1122_32125_103_1053}>
            <View style={styles.View_I1122_32125_103_1053_1_97}>
              <Text style={styles.Text_I1122_32125_103_1053_1_97}>
                DAPIL DPRD
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_1122_32126} />
      <View style={styles.View_1122_32127}>
        <View style={styles.View_1122_32129}>
          <View style={styles.View_1122_32130} />
          <View style={styles.View_1122_32131}>
            <Text style={styles.Text_1122_32131}>TERITORI</Text>
          </View>
        </View>
        <View style={styles.View_1122_32138}>
          <View style={styles.View_1122_32139} />
          <View style={styles.View_1122_32140} />
        </View>
      </View>
      <View style={styles.View_1122_32155}>
        <View style={styles.View_I1122_32155_31_2828} />
        <View style={styles.View_I1122_32155_31_2829}>
          <Text style={styles.Text_I1122_32155_31_2829}>Continue</Text>
        </View>
      </View>
      <View style={styles.View_1122_32159}>
        <View style={styles.View_1122_32160}>
          <View style={styles.View_1122_32161} />
          <View style={styles.View_1122_32162}>
            <Text style={styles.Text_1122_32162}>Wilayah</Text>
          </View>
        </View>
        <View style={styles.View_1122_32163}>
          <View style={styles.View_1122_32164} />
          <View style={styles.View_1122_32165} />
          <View style={styles.View_1122_32166}>
            <Text style={styles.Text_1122_32166}>Pengelolaan</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1122_32196}>
        <View style={styles.View_1122_32197} />
        <View style={styles.View_1122_32198}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32199}
          />
          <View style={styles.View_1122_32200}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_32201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/484d/73ac/8a2b2eea455d4669325d5c0fc60ecaf9"
              }}
              style={styles.ImageBackground_1122_32205}
            />
          </View>
        </View>
        <View style={styles.View_1122_32206}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32207}
          />
          <View style={styles.View_1122_32208}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_32209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe18/ba1b/14145df2f9ae0adfc76646741132f9c6"
              }}
              style={styles.ImageBackground_1122_32213}
            />
          </View>
        </View>
        <View style={styles.View_1122_32214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32215}
          />
          <View style={styles.View_1122_32216}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1122_32217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241f/bc68/3579ee0ef853a8dde9f81973b52f5f47"
              }}
              style={styles.ImageBackground_1122_32220}
            />
          </View>
        </View>
        <View style={styles.View_1122_32221}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1122_32222}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9eb/131c/86dbf8f64342db7cc5fd286677a64bea"
            }}
            style={styles.ImageBackground_1122_32223}
          />
        </View>
        <View style={styles.View_1122_32226}>
          <View style={styles.View_1122_32227} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d611/cc1c/3ff1a82d7133a68af8926c04d25b2620"
            }}
            style={styles.ImageBackground_1122_32228}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1122_32102: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32103: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32103_102_2766: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32103_102_2766_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32103_102_2766_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32103_102_2767: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32103_102_2768: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32103_102_2768_1_97: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32103_102_2768_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32104: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32104_108_204: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32104_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32104_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32104_108_205: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32104_108_205_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32104_108_205_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32104_108_206: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32104_108_206_1_97: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32104_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32105: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32105_108_76: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32105_108_76_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32105_108_76_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32105_108_77: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32105_108_77_2_193: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32105_108_77_2_193: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32105_108_78: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32105_108_78_1_97: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32105_108_78_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32106: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32106_108_204: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32106_108_204_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32106_108_204_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32106_108_205: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32106_108_205_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32106_108_205_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32106_108_206: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32106_108_206_1_97: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32106_108_206_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32107: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32107_108_208: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32107_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32107_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32107_108_209: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32107_108_209_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32107_108_209_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32107_108_210: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32107_108_210_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32107_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32108: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32108_108_212: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32108_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32108_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32108_108_213: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32108_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32108_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32108_108_214: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32108_108_214_1_97: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32108_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32109: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32109_108_212: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32109_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32109_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32109_108_213: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32109_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32109_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32109_108_214: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32109_108_214_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32109_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32110: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32110_108_212: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32110_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32110_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32110_108_213: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32110_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32110_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32110_108_214: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32110_108_214_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32110_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32111: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32111_108_212: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32111_108_212_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32111_108_212_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32111_108_213: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32111_108_213_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32111_108_213_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32111_108_214: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32111_108_214_1_97: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32111_108_214_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32112: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("55%")
  },
  View_1122_32113: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1122_32114: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32115: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("16%")
  },
  View_1122_32116: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1122_32117: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32118: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("62%")
  },
  View_1122_32119: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 67, 91, 1)"
  },
  View_1122_32120: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32121: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32121_108_148: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32121_108_148_1_14: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32121_108_148_1_14: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32121_108_149: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32121_108_149_2_193: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32121_108_149_2_193: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32121_108_150: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32121_108_150_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32121_108_150_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32122: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32122_103_1044: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32122_103_1044_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32122_103_1044_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32122_103_1045: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32122_103_1046: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32122_103_1046_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32122_103_1046_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32123: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32123_103_1044: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32123_103_1044_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32123_103_1044_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32123_103_1045: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32123_103_1046: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32123_103_1046_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32123_103_1046_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32124: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32124_108_208: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32124_108_208_1_2: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32124_108_208_1_2: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32124_108_209: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32124_108_209_1_113: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32124_108_209_1_113: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1122_32124_108_210: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32124_108_210_1_97: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32124_108_210_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1122_32125: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32125_103_1051: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32125_103_1051_1_9: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32125_103_1051_1_9: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I1122_32125_103_1052: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32125_103_1053: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32125_103_1053_1_97: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1122_32125_103_1053_1_97: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32127: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32129: {
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
  View_1122_32130: {
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
  View_1122_32131: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_32131: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32138: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_1122_32139: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0
  },
  View_1122_32140: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%")
  },
  View_1122_32155: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1122_32155_31_2828: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  View_I1122_32155_31_2829: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1122_32155_31_2829: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32159: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_1122_32160: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32161: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32162: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1122_32162: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32163: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32164: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32165: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  View_1122_32166: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1122_32166: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32196: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93%")
  },
  View_1122_32197: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32198: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  ImageBackground_1122_32199: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32200: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_32201: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32205: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_32206: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  ImageBackground_1122_32207: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32208: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_32209: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32213: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_32214: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  ImageBackground_1122_32215: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32216: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1122_32217: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1122_32220: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1122_32221: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32222: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32223: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1122_32226: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_1122_32227: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  ImageBackground_1122_32228: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
