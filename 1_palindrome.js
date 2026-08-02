// Given a string, s, return TRUE if it is a palindrome; otherwise, return FALSE.

// A phrase is considered a palindrome if it reads the same backward as forward after converting all uppercase letters to lowercase and removing any characters that are not letters or numbers. Only alphanumeric characters (letters and digits) are taken into account.

// #two_pointers pattern

const assert = require('node:assert/strict');

function isPalindrome(s) {
  s = s.replace(/[\W_]+/g, '').toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }

  return true;
}

assert.ok(isPalindrome("kaYak"));
assert.ok(!isPalindrome("hello"));
assert.ok(!isPalindrome("RaCEACAR"));
assert.ok(isPalindrome("Madam, in Eden, Im Adam"));
assert.ok(isPalindrome("@#$%^&*"));
assert.ok(isPalindrome("a^Ota_9m%2L^am91-ww^bhd9drd{8S4cXW^bwBU9(ZVg(2PH8p0Ki2UfovHbYU6iz?P8zOc)wvewwkC#}e6c0{#IZl)1Ee]GQEx7]QlY2iNgo7%Fc*gFh4G@bX@ZP991e~t4BNhREX(iR87vb&75,XoC1EqzAz,BFc]3!OkLeW?DvZY$5ZBZlwHpwh2a&ApwHqsNR(tiQIDC7yABF4ha[wZwDziITJ0]Y.nHxM1V7E9Uryj[UIP*mKIEHezphZW56GaAxaSzIqq$XYHTUO4!iUh$H3jfPIj1MJ8J4N{8=KUdFHsiMuG(lZt9}x_ojA2#AxH]fIs-p55BNC[L9RjW3RWtBi>M{o^~WpU17M&-hL00PTo0ps4NOXDnVyuinrnKas8VDHY.QJO!{21k28KP_fuffS02Tnadi^_hC5lc~+o^M$XWdMA>O(yFVKz{&461cTP1tb19k(i4BLdq0A991Q9xPjnJibvN-71pL_Gl6D+w95BI$@2<D>}=%>SiHm_bZ3iqJrpAPsmopBKy3dRY?yUz8ZFSE996*ZUTGST%SY3jL=HtxZlE6IOWTDpufyxAw9XsT_{fzEhkJ9*ur_QL4Os=c4{E3P-VUaUHDmA1HchQt<tj_s0nT~}awyEFyl!;WXhxKlxL[CcpNw1C1wr.R]wULXo_qk#1vBmb@OYJiZ*hnb#d9Zrn~1VS0?2Pb)]Dg.7oyA!SZK1hu~aUAE*Ek[XBW9J7XZ5Mo0iPaPc3qzsHh}QE$n5LKb0x@XtWXQYu?7gKd9HKmBcBCKAs_dQgMFCFXp2KqZa8>cpwEuC8dscrjHaPyCYS8mb)<oSvJIOvoG0DYLyt85wPp^bGp@Do#D_Gr4628Xc5H5SvwFOb2H?e[[18!8+B!u$8xAz[FQ6}.YSm<R4Bq5L(78e2aauD*jUfamWe8xhYk+T{czXhb$2UioQkhiOBk-RrdS1[r3RaTvEMfg,E%EK?p,+KXNt?KONd)YS5Wwv},)5K(wnJo.pGRw#i%OS9uEtWjhtAfPMD^KVPF11$pcRNDt74U%(MBW%lOtDA1!Pwj%4y9$}mrCmetoo2Tn@D]Jl5UGDFddfcumwD)k8MHgTE&wYfgB9,Rd2tXftTTDY~YRqnv1+IWxVAy)$YKKEKc@V!7Qy$EUhN_8({ObkP9Cb$rn05P&oUxrGS}K[0L=3Sb1]0LWwnnwWL;01;bS3L0KSGr,x<UoP50nrb[C9Pk}bO8NhUEyQ!7VcKEKKYyAVx~WI~1>vnqRYY=DTTtfXt2dR9Bg<fYwE;,TgHM8kD&wmucfdd>=F@DGU5l*-JDnT2oot*emCrm9y4jwP1A[DtO>?~lWB^MU{47tD{#N+R~#cp11~FPVKDMPfAthjWtE-*u9SOi-wRGpo~JnwK5v;wW5SYdNOKtNXKpKEEgf?ME_!>vTaR]3r1S(drRkB%&OihkQoiU2bh&X&z}cTkYhx8eWmafUjD}+uaa#2e%87L5qB4R.;&m@S$Y6QFzAx8uB[~881e&H2bOFwv;S5H<5%c_X826~4rGDoDpGbpPw58tyLYD0^G)o_v;OI?JvSobm8SY,Cy~PaHjrcsd8C^u_Ewpc8aZ&qK2pX{FCFMgQds$AKCBcBmKH9dKg7uYQ{X]W}tXx0=bKL5nEQ,hHszq3cPa?Pi0oM5ZX7J9!WB_XkEEAU@a-uh1KZSAyo[7#gD-bP20SV1nrZ9{dbnh@ZiJ.YObmBv1kqoXLUwRrw1C1wNp{cCLxl,Kxh$X;Wl(yFEyw(aTn0s[jt.$#tQhc=H1AmDHUa@UVP3E4csO4LQru9JkhEzfTsX9wAxyfupDTWO_I6ElZxtHLj3.YSTSGTUZ699!ES(FZ8zUyYRd3>yKB<po${msPAprJ?qi=3?Z?bmHiSD2?IB59wD6lGL*p^*17N~vbiJn@jPx9Q199A0qdLB4ik91bt1PTc164z+KVFyOAMd#W{]#XM@[,oc-{l#5ChidanT20SffufPK8$2k12OJ-QYHDV$8s=aKnrniu(&yVnDXON4sp0oTP<0&0LhM?7$_+1UpWoMi]BtWR3WjR9LCN!B]55psIfHxA2Ajo~{>x9tZlGu]M~i}sHFdUK8N(![4J!8J&M1jIPf>}j3H%hUi{4OUT{HY-Xqq+IzSaxA*aG$65WZhpze?HEI(KmPIUjyrU9E7V1MxHnY0JTIizD@w#Zwa]h4.FBA.y7CD&IQit&~RNsqHw<pAa2hwp*HwlZBZ5YZvDWeLkO3cFBzAzqE1*CoX57b!v78RiXERhNB4t$e19$9_PZXb]G4hFgc_F7ogN~i2<YlQ{<7x@EQGeE1+!lZI0c6eCkwwevwcOz8Pz?i6(UYbHvofU2i~K0[p8HP2g,VZ9UBw?bWXc4S8,;drd9dh-bww>19)maL#2m9atOa"));
