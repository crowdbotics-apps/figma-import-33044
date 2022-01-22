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
      <View style={styles.View_1122_31994}>
        <View style={styles.View_1122_31995} />
        <View style={styles.View_1122_31996}>
          <Text style={styles.Text_1122_31996}>Lihat berita lainnya</Text>
        </View>
        <View style={styles.View_1122_31997}>
          <View style={styles.View_1122_31998} />
          <View style={styles.View_1122_31999}>
            <Text style={styles.Text_1122_31999}>
              Presiden Joko Widodo atau Jokowi menerima pimpinan Komisi
              Pemilihan Umum (KPU) di Istana Merdeka, Jakarta, Senin pagi. Dalam
              pertemuan...
            </Text>
          </View>
          <View style={styles.View_1122_32000}>
            <Text style={styles.Text_1122_32000}>
              Bertemu Jokowi di Istana, Ini yang...
            </Text>
          </View>
          <View style={styles.View_1122_32001}>
            <Text style={styles.Text_1122_32001}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1122_32002}>
          <View style={styles.View_1122_32003} />
          <View style={styles.View_1122_32004}>
            <Text style={styles.Text_1122_32004}>
              Komisioner KPU Evi Novida Ginting Manik mengungkapkan alasan
              pihaknya tetap ngotot melarang eks koruptor maju dalam Pilkada
              2020. Menurut Evi, KPU tak ingin kejadian...
            </Text>
          </View>
          <View style={styles.View_1122_32005}>
            <Text style={styles.Text_1122_32005}>
              Larang Eks Koruptor Maju di Pilkada 2020...
            </Text>
          </View>
          <View style={styles.View_1122_32006}>
            <Text style={styles.Text_1122_32006}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1122_32007}>
          <View style={styles.View_1122_32008} />
          <View style={styles.View_1122_32009}>
            <Text style={styles.Text_1122_32009}>
              Partai Kebangkitan Bangsa (PKB) mendukung penuh pencalonan putra
              sulung Presiden Jokowi, Gibran Rakabuming Raka sebagai calon Wali
              Kota Solo...
            </Text>
          </View>
          <View style={styles.View_1122_32010}>
            <Text style={styles.Text_1122_32010}>
              Gibran Layak Memimpin Solo
            </Text>
          </View>
          <View style={styles.View_1122_32011}>
            <Text style={styles.Text_1122_32011}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1122_32012}>
          <View style={styles.View_1122_32013} />
          <View style={styles.View_1122_32014}>
            <Text style={styles.Text_1122_32014}>
              Partai Keadilan Sejahtera (PKS) mulai bersiap menghadapi Pilkada
              Serentak 2020. Sejumlah daerah mulai disambangi pimpinan DPP PKS,
              satu...
            </Text>
          </View>
          <View style={styles.View_1122_32015}>
            <Text style={styles.Text_1122_32015}>
              Pilkada Serentak 2020, PKS Buru Suara...
            </Text>
          </View>
          <View style={styles.View_1122_32016}>
            <Text style={styles.Text_1122_32016}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1122_32017}>
          <View style={styles.View_1122_32018} />
          <View style={styles.View_1122_32019}>
            <Text style={styles.Text_1122_32019}>
              Jakarta - Anak-anak Presiden Joko Widodo (Jokowi) dan Wapres
              Ma&#39;ruf Amin sudah mendaftarkan diri ke sejumlah parpol untuk
              mendapat dukungan di...
            </Text>
          </View>
          <View style={styles.View_1122_32020}>
            <Text style={styles.Text_1122_32020}>
              Pencalonan Anak Jokowi-Ma&#39;ruf di Pilkada...
            </Text>
          </View>
          <View style={styles.View_1122_32021}>
            <Text style={styles.Text_1122_32021}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1122_32022}>
          <Text style={styles.Text_1122_32022}>Berita Terbaru</Text>
        </View>
        <View style={styles.View_1122_32023}>
          <View style={styles.View_1122_32024}>
            <View style={styles.View_1122_32025} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9628/ad12/9e3e0718c9c33257afb4019d2f5f91ed"
              }}
              style={styles.ImageBackground_1122_32026}
            />
          </View>
          <View style={styles.View_1122_32027}>
            <View style={styles.View_1122_32028}>
              <Text style={styles.Text_1122_32028}>Anies - Sandi</Text>
            </View>
            <View style={styles.View_1122_32029}>
              <Text style={styles.Text_1122_32029}>
                Calon Gubernur &amp; Calon Wakil Gubernur DKI JAKARTA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1122_32030} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30df/869d/3d3301097d769448ced9f7a4e815460a"
          }}
          style={styles.ImageBackground_1122_32031}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0950/43e9/a9db38fe68f26b0369a71c3c8801601b"
          }}
          style={styles.ImageBackground_1122_32032}
        />
        <View style={styles.View_1122_32039} />
      </View>
      <View style={styles.View_1122_32040} />
      <TouchableOpacity
        style={styles.TouchableOpacity_1122_32041}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1122_32044"))
        }
      >
        <View style={styles.View_1122_32042} />
        <View style={styles.View_1122_32043}>
          <Text style={styles.Text_1122_32043}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("100%") },
  View_1122_31994: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1122_31995: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("187%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1122_31996: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("185%"),
    justifyContent: "flex-start"
  },
  Text_1122_31996: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_31997: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("160%")
  },
  View_1122_31998: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_31999: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1122_31999: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32000: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_32000: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32001: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1122_32001: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32002: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("135%")
  },
  View_1122_32003: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32004: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1122_32004: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32005: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_32005: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32006: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1122_32006: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32007: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("110%")
  },
  View_1122_32008: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32009: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1122_32009: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32010: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1122_32010: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32011: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1122_32011: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32012: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("85%")
  },
  View_1122_32013: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32014: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1122_32014: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32015: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_32015: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32016: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1122_32016: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32017: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("60%")
  },
  View_1122_32018: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1122_32019: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1122_32019: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32020: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1122_32020: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32021: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1122_32021: {
    color: "rgba(119, 132, 238, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32022: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_1122_32022: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32023: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%")
  },
  View_1122_32024: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32025: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1122_32026: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_1122_32027: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_1122_32028: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1122_32028: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32029: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1122_32029: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1122_32030: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  ImageBackground_1122_32031: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1122_32032: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("28%")
  },
  View_1122_32039: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1122_32040: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91%")
  },
  TouchableOpacity_1122_32041: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("93%")
  },
  View_1122_32042: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 132, 238, 1)"
  },
  View_1122_32043: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1122_32043: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
