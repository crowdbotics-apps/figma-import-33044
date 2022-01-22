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
      <View style={styles.View_1127_32951}>
        <View style={styles.View_1127_32952} />
        <View style={styles.View_1127_32953}>
          <Text style={styles.Text_1127_32953}>Lihat berita lainnya</Text>
        </View>
        <View style={styles.View_1127_32954}>
          <View style={styles.View_1127_32955} />
          <View style={styles.View_1127_32956}>
            <Text style={styles.Text_1127_32956}>
              Presiden Joko Widodo atau Jokowi menerima pimpinan Komisi
              Pemilihan Umum (KPU) di Istana Merdeka, Jakarta, Senin pagi. Dalam
              pertemuan...
            </Text>
          </View>
          <View style={styles.View_1127_32957}>
            <Text style={styles.Text_1127_32957}>
              Bertemu Jokowi di Istana, Ini yang...
            </Text>
          </View>
          <View style={styles.View_1127_32958}>
            <Text style={styles.Text_1127_32958}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1127_32959}>
          <View style={styles.View_1127_32960} />
          <View style={styles.View_1127_32961}>
            <Text style={styles.Text_1127_32961}>
              Komisioner KPU Evi Novida Ginting Manik mengungkapkan alasan
              pihaknya tetap ngotot melarang eks koruptor maju dalam Pilkada
              2020. Menurut Evi, KPU tak ingin kejadian...
            </Text>
          </View>
          <View style={styles.View_1127_32962}>
            <Text style={styles.Text_1127_32962}>
              Larang Eks Koruptor Maju di Pilkada 2020...
            </Text>
          </View>
          <View style={styles.View_1127_32963}>
            <Text style={styles.Text_1127_32963}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1127_32964}>
          <View style={styles.View_1127_32965} />
          <View style={styles.View_1127_32966}>
            <Text style={styles.Text_1127_32966}>
              Partai Kebangkitan Bangsa (PKB) mendukung penuh pencalonan putra
              sulung Presiden Jokowi, Gibran Rakabuming Raka sebagai calon Wali
              Kota Solo...
            </Text>
          </View>
          <View style={styles.View_1127_32967}>
            <Text style={styles.Text_1127_32967}>
              Gibran Layak Memimpin Solo
            </Text>
          </View>
          <View style={styles.View_1127_32968}>
            <Text style={styles.Text_1127_32968}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1127_32969}>
          <View style={styles.View_1127_32970} />
          <View style={styles.View_1127_32971}>
            <Text style={styles.Text_1127_32971}>
              Partai Keadilan Sejahtera (PKS) mulai bersiap menghadapi Pilkada
              Serentak 2020. Sejumlah daerah mulai disambangi pimpinan DPP PKS,
              satu...
            </Text>
          </View>
          <View style={styles.View_1127_32972}>
            <Text style={styles.Text_1127_32972}>
              Pilkada Serentak 2020, PKS Buru Suara...
            </Text>
          </View>
          <View style={styles.View_1127_32973}>
            <Text style={styles.Text_1127_32973}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1127_32974}>
          <View style={styles.View_1127_32975} />
          <View style={styles.View_1127_32976}>
            <Text style={styles.Text_1127_32976}>
              Jakarta - Anak-anak Presiden Joko Widodo (Jokowi) dan Wapres
              Ma&#39;ruf Amin sudah mendaftarkan diri ke sejumlah parpol untuk
              mendapat dukungan di...
            </Text>
          </View>
          <View style={styles.View_1127_32977}>
            <Text style={styles.Text_1127_32977}>
              Pencalonan Anak Jokowi-Ma&#39;ruf di Pilkada...
            </Text>
          </View>
          <View style={styles.View_1127_32978}>
            <Text style={styles.Text_1127_32978}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1127_32979}>
          <Text style={styles.Text_1127_32979}>Berita Terbaru</Text>
        </View>
        <View style={styles.View_1127_32980} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30df/869d/3d3301097d769448ced9f7a4e815460a"
          }}
          style={styles.ImageBackground_1127_32981}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0950/43e9/a9db38fe68f26b0369a71c3c8801601b"
          }}
          style={styles.ImageBackground_1127_32982}
        />
        <View style={styles.View_1127_32989} />
        <View style={styles.View_1127_32990}>
          <View style={styles.View_1127_32991}>
            <Text style={styles.Text_1127_32991}>Media</Text>
          </View>
          <View style={styles.View_1127_32992}>
            <View style={styles.View_1127_32993} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/868e/ea22/a251fe84ab755597f05a58db16555cc8"
              }}
              style={styles.ImageBackground_1127_32994}
            />
          </View>
        </View>
        <View style={styles.View_1127_32998}>
          <View style={styles.View_1127_32999}>
            <Text style={styles.Text_1127_32999}>Berita</Text>
          </View>
          <View style={styles.View_1127_33000}>
            <View style={styles.View_1127_33001} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/986d/a842/e7ecc69a1654af24ad87730a486dc0a0"
              }}
              style={styles.ImageBackground_1127_33002}
            />
          </View>
        </View>
        <View style={styles.View_1127_33005}>
          <View style={styles.View_1127_33006}>
            <View style={styles.View_1127_33007} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbd7/0803/00320800431a4fc526386b1dfa348984"
              }}
              style={styles.ImageBackground_1127_33008}
            />
          </View>
          <View style={styles.View_1127_33013}>
            <Text style={styles.Text_1127_33013}>Profil</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1127_33014}>
        <View style={styles.View_1127_33015} />
        <View style={styles.View_1127_33016}>
          <View style={styles.View_1127_33017} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f69/0d69/748f381d2d057a0889b33add1f111ada"
            }}
            style={styles.ImageBackground_1127_33018}
          />
        </View>
        <View style={styles.View_1127_33022}>
          <View style={styles.View_1127_33023} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b572/a20c/035b8ab943c1cefa49cd7cd3015b361e"
            }}
            style={styles.ImageBackground_1127_33024}
          />
        </View>
        <View style={styles.View_1127_33027}>
          <View style={styles.View_1127_33028} />
          <View style={styles.View_1127_33029}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d4d/7d0b/3edc5fddb0e3a1fc06ea5d5b2334b3ff"
              }}
              style={styles.ImageBackground_1127_33030}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("100%") },
  View_1127_32951: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1127_32952: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("193%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1127_32953: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("190%"),
    justifyContent: "flex-start"
  },
  Text_1127_32953: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32954: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("165%")
  },
  View_1127_32955: {
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
  View_1127_32956: {
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
  Text_1127_32956: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32957: {
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
  Text_1127_32957: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32958: {
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
  Text_1127_32958: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32959: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("140%")
  },
  View_1127_32960: {
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
  View_1127_32961: {
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
  Text_1127_32961: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32962: {
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
  Text_1127_32962: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32963: {
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
  Text_1127_32963: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32964: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("115%")
  },
  View_1127_32965: {
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
  View_1127_32966: {
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
  Text_1127_32966: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32967: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1127_32967: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32968: {
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
  Text_1127_32968: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32969: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("90%")
  },
  View_1127_32970: {
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
  View_1127_32971: {
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
  Text_1127_32971: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32972: {
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
  Text_1127_32972: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32973: {
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
  Text_1127_32973: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32974: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("65%")
  },
  View_1127_32975: {
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
  View_1127_32976: {
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
  Text_1127_32976: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32977: {
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
  Text_1127_32977: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32978: {
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
  Text_1127_32978: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32979: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_1127_32979: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32980: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 156, 18, 1)"
  },
  ImageBackground_1127_32981: {
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
  ImageBackground_1127_32982: {
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
  View_1127_32989: {
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
  View_1127_32990: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("35%")
  },
  View_1127_32991: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_1127_32991: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_32992: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1127_32993: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1127_32994: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1127_32998: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("35%")
  },
  View_1127_32999: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_1127_32999: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_33000: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1127_33001: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1127_33002: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1127_33005: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%")
  },
  View_1127_33006: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1127_33007: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1127_33008: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1127_33013: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_1127_33013: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1127_33014: {
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
  View_1127_33015: {
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
  View_1127_33016: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%")
  },
  View_1127_33017: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  ImageBackground_1127_33018: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1127_33022: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_1127_33023: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  ImageBackground_1127_33024: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1127_33027: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1127_33028: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 254, 254, 1)"
  },
  View_1127_33029: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1127_33030: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
