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
      <View style={styles.View_1131_32966}>
        <View style={styles.View_1131_32967} />
        <View style={styles.View_1131_32968}>
          <Text style={styles.Text_1131_32968}>Lihat berita lainnya</Text>
        </View>
        <View style={styles.View_1131_32969}>
          <View style={styles.View_1131_32970} />
          <View style={styles.View_1131_32971}>
            <Text style={styles.Text_1131_32971}>
              Presiden Joko Widodo atau Jokowi menerima pimpinan Komisi
              Pemilihan Umum (KPU) di Istana Merdeka, Jakarta, Senin pagi. Dalam
              pertemuan...
            </Text>
          </View>
          <View style={styles.View_1131_32972}>
            <Text style={styles.Text_1131_32972}>
              Bertemu Jokowi di Istana, Ini yang...
            </Text>
          </View>
          <View style={styles.View_1131_32973}>
            <Text style={styles.Text_1131_32973}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1131_32974}>
          <View style={styles.View_1131_32975} />
          <View style={styles.View_1131_32976}>
            <Text style={styles.Text_1131_32976}>
              Komisioner KPU Evi Novida Ginting Manik mengungkapkan alasan
              pihaknya tetap ngotot melarang eks koruptor maju dalam Pilkada
              2020. Menurut Evi, KPU tak ingin kejadian...
            </Text>
          </View>
          <View style={styles.View_1131_32977}>
            <Text style={styles.Text_1131_32977}>
              Larang Eks Koruptor Maju di Pilkada 2020...
            </Text>
          </View>
          <View style={styles.View_1131_32978}>
            <Text style={styles.Text_1131_32978}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1131_32979}>
          <View style={styles.View_1131_32980} />
          <View style={styles.View_1131_32981}>
            <Text style={styles.Text_1131_32981}>
              Partai Kebangkitan Bangsa (PKB) mendukung penuh pencalonan putra
              sulung Presiden Jokowi, Gibran Rakabuming Raka sebagai calon Wali
              Kota Solo...
            </Text>
          </View>
          <View style={styles.View_1131_32982}>
            <Text style={styles.Text_1131_32982}>
              Gibran Layak Memimpin Solo
            </Text>
          </View>
          <View style={styles.View_1131_32983}>
            <Text style={styles.Text_1131_32983}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1131_32984}>
          <View style={styles.View_1131_32985} />
          <View style={styles.View_1131_32986}>
            <Text style={styles.Text_1131_32986}>
              Partai Keadilan Sejahtera (PKS) mulai bersiap menghadapi Pilkada
              Serentak 2020. Sejumlah daerah mulai disambangi pimpinan DPP PKS,
              satu...
            </Text>
          </View>
          <View style={styles.View_1131_32987}>
            <Text style={styles.Text_1131_32987}>
              Pilkada Serentak 2020, PKS Buru Suara...
            </Text>
          </View>
          <View style={styles.View_1131_32988}>
            <Text style={styles.Text_1131_32988}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1131_32989}>
          <View style={styles.View_1131_32990} />
          <View style={styles.View_1131_32991}>
            <Text style={styles.Text_1131_32991}>
              Jakarta - Anak-anak Presiden Joko Widodo (Jokowi) dan Wapres
              Ma&#39;ruf Amin sudah mendaftarkan diri ke sejumlah parpol untuk
              mendapat dukungan di...
            </Text>
          </View>
          <View style={styles.View_1131_32992}>
            <Text style={styles.Text_1131_32992}>
              Pencalonan Anak Jokowi-Ma&#39;ruf di Pilkada...
            </Text>
          </View>
          <View style={styles.View_1131_32993}>
            <Text style={styles.Text_1131_32993}>SELENGKAPNYA</Text>
          </View>
        </View>
        <View style={styles.View_1131_32994}>
          <Text style={styles.Text_1131_32994}>Berita Terbaru</Text>
        </View>
        <View style={styles.View_1131_32995} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7503/93e3/b10043fcf48f31e581efaeefd466d9d1"
          }}
          style={styles.ImageBackground_1133_32932}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0950/43e9/a9db38fe68f26b0369a71c3c8801601b"
          }}
          style={styles.ImageBackground_1131_32997}
        />
        <View style={styles.View_1131_33004} />
      </View>
      <View style={styles.View_1131_33049}>
        <View style={styles.View_1131_33050}>
          <Text style={styles.Text_1131_33050}>Dashboard</Text>
        </View>
        <View style={styles.View_1133_32918}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/886d/fc3f/6f29f52f9868915202ac12a1f109911d"
            }}
            style={styles.ImageBackground_1133_32919}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/886d/fc3f/6f29f52f9868915202ac12a1f109911d"
            }}
            style={styles.ImageBackground_1133_32922}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/886d/fc3f/6f29f52f9868915202ac12a1f109911d"
            }}
            style={styles.ImageBackground_1133_32925}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/886d/fc3f/6f29f52f9868915202ac12a1f109911d"
            }}
            style={styles.ImageBackground_1133_32928}
          />
        </View>
        <View style={styles.View_1131_33062} />
      </View>
      <View style={styles.View_1131_33063}>
        <View style={styles.View_1131_33064}>
          <Text style={styles.Text_1131_33064}>Media</Text>
        </View>
        <View style={styles.View_1131_33065}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aab8/61c4/b6f21079c69bc126948010b319820579"
            }}
            style={styles.ImageBackground_1131_33066}
          />
        </View>
        <View style={styles.View_1131_33070} />
      </View>
      <View style={styles.View_1131_33071}>
        <View style={styles.View_1131_33072}>
          <Text style={styles.Text_1131_33072}>Berita</Text>
        </View>
        <View style={styles.View_1131_33051}>
          <View style={styles.View_1131_33052}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9a5/1f1d/9606f78086c3cce08923308c52a48e36"
              }}
              style={styles.ImageBackground_1131_33053}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/415a/17da/ee35df252f02275c47e881ba61582690"
              }}
              style={styles.ImageBackground_1131_33056}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82a5/bc07/69fe7c017125ffa309ec6b4c4c8abe71"
              }}
              style={styles.ImageBackground_1131_33059}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82a5/bc07/69fe7c017125ffa309ec6b4c4c8abe71"
              }}
              style={styles.ImageBackground_1131_33060}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82a5/bc07/69fe7c017125ffa309ec6b4c4c8abe71"
              }}
              style={styles.ImageBackground_1131_33061}
            />
          </View>
        </View>
        <View style={styles.View_1131_33077} />
      </View>
      <View style={styles.View_1131_33078}>
        <View style={styles.View_1131_33079}>
          <Text style={styles.Text_1131_33079}>CALEG</Text>
        </View>
        <View style={styles.View_1137_32998}>
          <View style={styles.View_1131_33089} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/613e/0957/a78b6bf48e79fefdc70d93e10c696af0"
            }}
            style={styles.ImageBackground_1132_34612}
          />
        </View>
      </View>
      <View style={styles.View_1133_32933}>
        <View style={styles.View_1133_32934} />
        <View style={styles.View_1133_32935}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1133_32936}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9861/c8d0/6d79933c975e3e9dfc5dafe6b996a0fd"
            }}
            style={styles.ImageBackground_1134_32981}
          />
        </View>
        <View style={styles.View_1133_32943}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1133_32944}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f69/0d69/748f381d2d057a0889b33add1f111ada"
            }}
            style={styles.ImageBackground_1133_32945}
          />
        </View>
        <View style={styles.View_1133_32958}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd1/ff5f/b7489a12526f11bfa190c20d2d06baa2"
            }}
            style={styles.ImageBackground_1133_32959}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_1133_32960}
          />
          <View style={styles.View_1135_32993}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361a/eeb9/b2d6fb99d9c5fdb4aebf564dff0aedac"
              }}
              style={styles.ImageBackground_1135_32994}
            />
          </View>
        </View>
        <View style={styles.View_1133_32963}>
          <View style={styles.View_1133_32964} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d611/cc1c/3ff1a82d7133a68af8926c04d25b2620"
            }}
            style={styles.ImageBackground_1133_32965}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("100%") },
  View_1131_32966: {
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
  View_1131_32967: {
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
  View_1131_32968: {
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
  Text_1131_32968: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32969: {
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
  View_1131_32970: {
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
  View_1131_32971: {
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
  Text_1131_32971: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32972: {
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
  Text_1131_32972: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32973: {
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
  Text_1131_32973: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32974: {
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
  View_1131_32975: {
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
  View_1131_32976: {
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
  Text_1131_32976: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32977: {
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
  Text_1131_32977: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32978: {
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
  Text_1131_32978: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32979: {
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
  View_1131_32980: {
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
  View_1131_32981: {
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
  Text_1131_32981: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32982: {
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
  Text_1131_32982: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32983: {
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
  Text_1131_32983: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32984: {
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
  View_1131_32985: {
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
  View_1131_32986: {
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
  Text_1131_32986: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32987: {
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
  Text_1131_32987: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32988: {
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
  Text_1131_32988: {
    color: "rgba(243, 156, 18, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32989: {
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
  View_1131_32990: {
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
  View_1131_32991: {
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
  Text_1131_32991: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32992: {
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
  Text_1131_32992: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32993: {
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
  Text_1131_32993: {
    color: "rgba(73, 126, 254, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32994: {
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
  Text_1131_32994: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1131_32995: {
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
  ImageBackground_1133_32932: {
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
  ImageBackground_1131_32997: {
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
  View_1131_33004: {
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
  View_1131_33049: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("36%")
  },
  View_1131_33050: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1131_33050: {
    color: "rgba(27, 28, 49, 1)",
    fontSize: 9.865470886230469,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3390134572982788,
    textTransform: "none"
  },
  View_1133_32918: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1133_32919: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1133_32922: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1133_32925: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1133_32928: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1131_33062: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(82, 67, 170, 1)"
  },
  View_1131_33063: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("36%")
  },
  View_1131_33064: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1131_33064: {
    color: "rgba(27, 28, 49, 1)",
    fontSize: 9.865470886230469,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3390134572982788,
    textTransform: "none"
  },
  View_1131_33065: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1131_33066: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1131_33070: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 135, 90, 1)"
  },
  View_1131_33071: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("36%")
  },
  View_1131_33072: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1131_33072: {
    color: "rgba(27, 28, 49, 1)",
    fontSize: 9.865470886230469,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3390134572982788,
    textTransform: "none"
  },
  View_1131_33051: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1131_33052: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1131_33053: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1131_33056: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1131_33059: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1131_33060: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1131_33061: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1131_33077: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(222, 53, 11, 1)"
  },
  View_1131_33078: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%")
  },
  View_1131_33079: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1131_33079: {
    color: "rgba(27, 28, 49, 1)",
    fontSize: 9.865470886230469,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3390134572982788,
    textTransform: "none"
  },
  View_1137_32998: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_1131_33089: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 82, 204, 1)"
  },
  ImageBackground_1132_34612: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1133_32933: {
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
  View_1133_32934: {
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
  View_1133_32935: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%")
  },
  ImageBackground_1133_32936: {
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
  ImageBackground_1134_32981: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1133_32943: {
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
  ImageBackground_1133_32944: {
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
  ImageBackground_1133_32945: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1133_32958: {
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
  ImageBackground_1133_32959: {
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
  ImageBackground_1133_32960: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1135_32993: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1135_32994: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1133_32963: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_1133_32964: {
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
  ImageBackground_1133_32965: {
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
