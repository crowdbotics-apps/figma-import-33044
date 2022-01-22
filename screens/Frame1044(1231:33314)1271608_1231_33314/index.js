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
      <View style={styles.View_1231_33315}>
        <View style={styles.View_1231_33316}>
          <View style={styles.View_1231_33317} />
          <View style={styles.View_1232_33686}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ba/f020/8489fd08ab16811840ca68f63ea7759c"
              }}
              style={styles.ImageBackground_1232_33687}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c933/bc43/9630ef9613452641c98aea9953f242c0"
              }}
              style={styles.ImageBackground_1232_33690}
            />
          </View>
          <View style={styles.View_1232_33691}>
            <Text style={styles.Text_1232_33691}>78%</Text>
          </View>
          <View style={styles.View_1231_33318}>
            <Text style={styles.Text_1231_33318}>Kalender</Text>
          </View>
          <View style={styles.View_1231_33319}>
            <View style={styles.View_1231_33320}>
              <View style={styles.View_1231_33321}>
                <View style={styles.View_1231_33322}>
                  <Text style={styles.Text_1231_33322}>November 24</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1232_33692}>
          <View style={styles.View_1232_33693} />
          <View style={styles.View_1232_33694}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ba/f020/8489fd08ab16811840ca68f63ea7759c"
              }}
              style={styles.ImageBackground_1232_33695}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c933/bc43/9630ef9613452641c98aea9953f242c0"
              }}
              style={styles.ImageBackground_1232_33698}
            />
          </View>
          <View style={styles.View_1232_33699}>
            <Text style={styles.Text_1232_33699}>78%</Text>
          </View>
          <View style={styles.View_1232_33700}>
            <Text style={styles.Text_1232_33700}>Spanduk</Text>
          </View>
          <View style={styles.View_1232_33701}>
            <View style={styles.View_1232_33702}>
              <View style={styles.View_1232_33703}>
                <View style={styles.View_1232_33704}>
                  <Text style={styles.Text_1232_33704}>November 24</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1232_33709}>
          <View style={styles.View_1232_33710} />
          <View style={styles.View_1232_33711}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ba/f020/8489fd08ab16811840ca68f63ea7759c"
              }}
              style={styles.ImageBackground_1232_33712}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b28/397e/2c701f62eda2dbb9bb4db5e7e7f5460e"
              }}
              style={styles.ImageBackground_1232_33715}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bdd/aa31/ed39a089205c6d8c32e1a86fb370d9b2"
            }}
            style={styles.ImageBackground_1232_33760}
          />
          <View style={styles.View_1232_33717}>
            <Text style={styles.Text_1232_33717}>Bendera</Text>
          </View>
          <View style={styles.View_1232_33718}>
            <View style={styles.View_1232_33719}>
              <View style={styles.View_1232_33720}>
                <View style={styles.View_1232_33721}>
                  <Text style={styles.Text_1232_33721}>November 24</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1232_33726}>
          <View style={styles.View_1232_33727} />
          <View style={styles.View_1232_33728}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ba/f020/8489fd08ab16811840ca68f63ea7759c"
              }}
              style={styles.ImageBackground_1232_33729}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c933/bc43/9630ef9613452641c98aea9953f242c0"
              }}
              style={styles.ImageBackground_1232_33732}
            />
          </View>
          <View style={styles.View_1232_33733}>
            <Text style={styles.Text_1232_33733}>78%</Text>
          </View>
          <View style={styles.View_1232_33734}>
            <Text style={styles.Text_1232_33734}>Kaos</Text>
          </View>
          <View style={styles.View_1232_33735}>
            <View style={styles.View_1232_33736}>
              <View style={styles.View_1232_33737}>
                <View style={styles.View_1232_33738}>
                  <Text style={styles.Text_1232_33738}>November 24</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1232_33743}>
          <View style={styles.View_1232_33744} />
          <View style={styles.View_1232_33745}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ba/f020/8489fd08ab16811840ca68f63ea7759c"
              }}
              style={styles.ImageBackground_1232_33746}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c933/bc43/9630ef9613452641c98aea9953f242c0"
              }}
              style={styles.ImageBackground_1232_33749}
            />
          </View>
          <View style={styles.View_1232_33750}>
            <Text style={styles.Text_1232_33750}>78%</Text>
          </View>
          <View style={styles.View_1232_33751}>
            <Text style={styles.Text_1232_33751}>Kalender</Text>
          </View>
          <View style={styles.View_1232_33752}>
            <View style={styles.View_1232_33753}>
              <View style={styles.View_1232_33754}>
                <View style={styles.View_1232_33755}>
                  <Text style={styles.Text_1232_33755}>November 24</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1231_33419}>
        <View style={styles.View_1231_33420}>
          <View style={styles.View_1231_33421} />
          <View style={styles.View_1231_33422}>
            <Text style={styles.Text_1231_33422}>Buat Distribusi</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7295/b977/ba4a9e6fb0616507cebe038b471ab4b8"
          }}
          style={styles.ImageBackground_1231_33423}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_1231_33315: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1231_33316: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1231_33317: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1232_33686: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_1232_33687: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1232_33690: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  View_1232_33691: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-end"
  },
  Text_1232_33691: {
    color: "rgba(73, 126, 254, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1231_33318: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1231_33318: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1231_33319: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("8%")
  },
  View_1231_33320: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1231_33321: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1231_33322: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1231_33322: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33692: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  View_1232_33693: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1232_33694: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_1232_33695: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1232_33698: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  View_1232_33699: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-end"
  },
  Text_1232_33699: {
    color: "rgba(73, 126, 254, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1232_33700: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1232_33700: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33701: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("8%")
  },
  View_1232_33702: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33703: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33704: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1232_33704: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33709: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  View_1232_33710: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1232_33711: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_1232_33712: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1232_33715: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%")
  },
  ImageBackground_1232_33760: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1232_33717: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1232_33717: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33718: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("8%")
  },
  View_1232_33719: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33720: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33721: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1232_33721: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33726: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%")
  },
  View_1232_33727: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1232_33728: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_1232_33729: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1232_33732: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  View_1232_33733: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-end"
  },
  Text_1232_33733: {
    color: "rgba(73, 126, 254, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1232_33734: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1232_33734: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33735: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("8%")
  },
  View_1232_33736: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33737: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33738: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1232_33738: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33743: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%")
  },
  View_1232_33744: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1232_33745: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_1232_33746: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1232_33749: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  View_1232_33750: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-end"
  },
  Text_1232_33750: {
    color: "rgba(73, 126, 254, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1232_33751: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1232_33751: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1232_33752: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("8%")
  },
  View_1232_33753: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33754: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1232_33755: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1232_33755: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_1231_33419: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1231_33420: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1231_33421: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1231_33422: {
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1231_33422: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_1231_33423: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
