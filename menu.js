var telas = ["menu"];
var larguraJogo = 1280;
var alturaJogo = 720;

function menu() {
		// Constantes auxiliares
	var telaInicial = 0;
	var escolhaSalarioIntegral = 1;
	var escolhaSalarioMetade = 2;
	var escolhaBebidaMuito = 1;
	var escolhaBebidaPouco = 2;
	var telaEscolhaSalario = 27;
	var telaEscolhaBebida = 43;
	var telaEscolhaBebida2 = 44;
	
	var escolhaSalario, escolhaBebida;
	
	var botao1, botao2;
	var fundo;
	var botaoPodeClicar, telaAtual, telaDepoisDoFadeOut;
	
	var telas = [
		
		//telas principais
		"capafinal.jpg", // 0 - storytelling
		"Polaroidpequena.jpg", // 1 - storytelling
		"polaroidfamilia.jpg", // 2 - storytelling
		"polaroidnewyork.jpg", // 3 - storytelling
		"polaroidtoni.jpg", // 4 - storytelling
		"polaroidpedido.jpg", // 5 - storytelling
		"telacasamento.jpg", // 6 - storytelling
		"polaroidprintinsta.jpg", // 7 - storytelling
		"acordandotela1.jpg", // 8 - tem decisao
		"chamaju.jpg", // 9 - storytelling
		"banho.jpg", // 10 - storytelling
		"cafedamanha.jpg", // 11 - tem decisao
		"feedinstacafe.jpg", // 12 - storytelling
		"storysemfiltro.jpg", // 13 - tem decisao
		"storycomfiltro.jpg", // 14 - storytelling
		"conversatonicafe.jpg", // 15 - tem decisao
		"decisaoroupasport.jpg", // 16 - tem decisao
		"corridacasual1.jpg", // 17 - storytelling
		"paparazzicasual.jpg", // 18 - storytelling
		"corridachique.jpg", // 19 - storytelling
		"paparazzichique.jpg", // 20 - storytelling
		"sauna.jpg", // 21 - storytelling
		"piscina1.jpg", // 22 - storytelling
		"piscina2.jpg", // 23 - storytelling
		"piscina3.jpg", // 24 - storytelling
		"salacompras.jpg", // 25 - storytelling
		"salamanager.jpg", // 26 - storytelling
		"cozinhasalario.jpg", // 27 >>>>>>>>>>>>>>> TEM DECISAO IMPORTANTE <<<<<<<<<<<<<
		"cozinhasalarioint.jpg", // 28 - storytelling
		"cozinhasalariomet.jpg", // 29 - storytelling
		"cozinhasalariomet2.jpg", // 30 - storytelling
		"salastorysoltamao.jpg", // 31 - storytelling
		"salaconversatoni.jpg", // 32 - storytelling
		"salajufesta1.jpg", // 33 - tem decisao
		"salaconviteamigos.jpg", // 34 - storytelling
		"salaconvitemae.jpg", // 35 - storytelling
		"salafestaju2.jpg", // 36 - storytelling
		"sabadomanha.jpg", // 37 - storytelling
		"sabadoconversatoni.jpg", // 38 - storytelling
		"sabadobanho.jpg", // 39 - storytelling
		"sabadodecisaoroupa.jpg", // 40 - tem decisao
		"festaroupacasual.jpg", // 41 - storytelling
		"festaroupachique.jpg", // 42 - storytelling
		"festachegadaamigos.jpg", // 43 >>>>>>>>>>>>>>> TEM DECISAO IMPORTANTE <<<<<<<<<<<<<
		"festachegadaamigos.jpg", // 44 >>>>>>>>>>>>>>> TEM DECISAO IMPORTANTE <<<<<<<<<<<<<
		"festabebepoucocasual.jpg", // 45 - storytelling
		"festabmcasual.jpg", // 46 - storytelling
		"festabebepoucochique.jpg", // 47 - storytelling
		"festabmchique.jpg", // 48 - storytelling
		"festabmpiscina.jpg", // 49 - storytelling
		"festabmflerte.jpg", // 50 - fake decisao / storytelling
		"festabmpegacao.jpg", // 51 - storytelling
		"festabmpt1.jpg", // 52 - storytelling
		"festabmpt2.jpg", // 53 - storytelling
		"ressaca1.jpg", // 54 - storytelling
		"ressaca2.jpg", // 55 - storytelling
		"ressaca3.jpg", // 56 - storytelling
		"ressacaposttoni.jpg", // 57 - tem decisao
		"ressacaposttoniconsc.jpg", // 58 - storytelling
		"ressacaposttonimimada.jpg", // 59 - storytelling
		"ressacapassardia.jpg", // 60 - storytelling
		// >>>>>>>>>>>>>>> VALIDAÇÃO VARIAVÉIS <<<<<<<<<<<<<
		
		// TELAS ESSADECISÃOSERÁLEMBRADA PRINCIPAL
		"DISALMET.jpg", // 61
		"DISALINT.jpg", // 62
		"DIBEBEMUITO.jpg", //63
	
		//telas inicio ramificação
		
		"NN61.jpg", // 64 - Salmet, BM
		"NB61.jpg", // 65 - Salmet, NBM
		"SB61.jpg", // 66 - Salint, BM
		"SN61.jpg", // 67 - Salint, NBM
		
		// telas arco final
		// NN (NNC, NNN)
		// NB (NBC, NBN)
		// SB (SBC, SBN)
		//SBC
		"SBC63.jpg", // 68 - tem decisao
		"SBC131.jpg", // 69 - storytelling
		"SBC132.jpg", // 70 - storytelling
		"SBC133.jpg", // 71 - storytelling
		"SBC134.jpg", // 72 - tem decisao
		"SBC135.jpg", // 73 - tem decisao
		"SBC136.jpg", // 74 - storytelling
		"SBC137.jpg", // 75 - storytelling
		"SBC138.jpg", // 76 - storytelling
		"SBC126.jpg", // 77 - storytelling
		"SBC127.jpg", // 78 - storytelling
		"SBC123.jpg", // 79 - storytelling
		"SBC124.jpg", // 80 - storytelling
		"SBC125.jpg", // 81 - storytelling
		"SBC110.jpg", // 82 - tem decisao
		"SBC111.jpg", // 83 - storytelling
		"SBC112.jpg", // 84 - storytelling
		"SBC98.jpg", // 85 - storytelling
		// TELAS ESSADECISÃOSERÁLEMBRADA
		"SBC_DIBROKEN.jpg", // 86 
		"SBC_DIHEART.jpg", // 87
		"SBC_DIWAVE.jpg", // 88
		"SBC_DIHEART.jpg", //89
		//TELASFINAIS
		"SBCs105.jpg", // 90
		"SBCs180.jpg", // 91
		"SBCs182.jpg", // 92
		// SBN
		"SBN63.jpg", // 93 - tem decisao
		"SBN66.jpg", // 94 - storytelling
		"SBN67.jpg", // 95 - storytelling
		"SBN68.jpg", // 96 - storytelling
		"SBN69.jpg", // 97 - storytelling
		// TELAS ESSADECISÃOSERÁLEMBRADA
		"SBN_DIHEART.jpg", // 98
		"SBN_DIWAVE.jpg", // 99
		//TELASFINAIS
		"SBNs81.jpg", //100
		// SN (SNC, SNN)
		//SNC
		"SNC62.jpg", // 101 - storytelling
		"SNC63.jpg", // 102 - tem decisao
		"SNC65.jpg", // 103 - storytelling
		"SNC116.jpg", // 104 - tem decisao
		"SNC117.jpg", // 105 - tem decisao
		"SNC82.jpg", // 106 - tem decisao
		"SNC98.jpg", // 107 - storytelling
		"SNC118.jpg", // 108 - storytelling
		"SNC119.jpg", // 109 - storytelling
		"SNC120.jpg", // 110 - tem decisao
		"SNC126.jpg", // 111 - storytelling
		"SNC113.jpg", // 112 - storytelling
		"SNC190.jpg", // 113 - storytelling
		"SNC192.jpg", // 114 - tem decisao
		"SNC127.jpg", // 115 - storytelling
		"SNC128.jpg", // 116 - storytelling
		"SNC129.jpg", // 117 - storytelling
		"SNC130.jpg", // 118 - storytelling
		"SNC110.jpg", // 119 - tem decisao
		"SNC111.jpg", // 120 - storytelling
		"SNC112.jpg", // 121 - storytelling
		"SNC191.jpg", // 122 - storytelling
		// TELASFINAIS
		"SNCs105.jpg", // 123
		"SNCs185.jpg", // 124
		"SNCs180.jpg", // 125
		"SNCs182.jpg", // 126
		// TELAS ESSADECISÃOSERÁLEMBRADA
		"SNC_DIBROKEN.jpg", // 127
		"SNC_DIHEART.jpg", // 128
		"SNC_DIWAVE.jpg", // 129
		"SNC_DIHEART.jpg", // 130
		"SNC_DIHEART.jpg", // 131
		//SNN
		"SNN63.jpg", // 132 - tem decisao
		"SNN66.jpg", // 133 - storytelling
		"SNN67.jpg", // 134 - storytelling
		"SNN68.jpg", // 135 - storytelling
		"SNN69.jpg", // 136 - storytelling
		// TELASFINAIS
		"SNNs81.jpg", // 137 
		//NN (NNC, NNN)
		//NNC
		"NNC62.jpg", // 138 - storytelling
		"NNC63.jpg", // 139 - tem decisao
		"NNC114.jpg", // 140 - storytelling
		"NNC115.jpg", // 141 - storytelling
		"NNC116.jpg", // 142 - tem decisao
		"NNC191.jpg", // 143 - storytelling
		"NNC193.jpg", // 144 - tem decisao
		"NNC121.jpg", // 145 - storytelling
		"NNC123.jpg", // 146 - storytelling
		"NNC187.jpg", // 147 - storytelling
		"NNC188.jpg", // 148 - storytelling
		"NNC146.jpg", // 149 - storytelling
		"NNC117.jpg", // 150 - tem decisao
		"NNC190.jpg", // 151 - storytelling
		"NNC82.jpg", // 152 - tem decisao
		"NNC98.jpg", // 153 - storytelling
		"NNC118.jpg", // 154 - storytelling
		"NNC119.jpg", // 155 - storytelling
		"NNC120.jpg", // 156 - tem decisao
		// TELASFINAIS
		"NNCs180.jpg", // 157 
		"NNCs105.jpg", // 158
		// TELAS ESSADECISÃOSERÁLEMBRADA
		"NNC_DIBROKEN.jpg", // 159
		"NNC_DIHEART.jpg", // 160
		"NNC_DIWAVE.jpg", // 161
		"NNC_DIHEART.jpg", // 162
		"NNC_DIBROKEN.jpg", // 163
		//NNN
		"NNN189.jpg", // 164 - storytelling
		"NNN71.jpg", // 165 - storytelling
		"NNN72.jpg", // 166 - tem decisao
		"NNN73.jpg", // 167 - tem decisao
		"NNN74.jpg", // 168 - tem decisao
		"NNN75.jpg", // 169 - tem decisao
		"NNN81.jpg", // 170 - tem decisao
		"NNN76.jpg", // 171 - tem decisao
		"NNN77.jpg", // 172 - storytelling
		"NNN78.jpg", // 173 - tem decisao
		"NNN79.jpg", // 174 - storytelling
		"NNN80.jpg", // 175 - storytelling
		"NNN82.jpg", // 176 - tem decisao
		"NNN98.jpg", // 177 - storytelling
		"NNN103.jpg", // 178 - storytelling
		"NNN104.jpg", // 179 - tem decisao
		"NNN105.jpg", // 180 - storytelling
		"NNN106.jpg", // 181 - storytelling
		"NNN107.jpg", // 182 - storytelling
		"NNN108.jpg", // 183 - storytelling
		"NNN109.jpg", // 184 - storytelling
		"NNN110.jpg", // 185 - tem decisao
		"NNN111.jpg", // 186 - storytelling
		"NNN112.jpg", // 187 - storytelling
		"NNN113.jpg", // 188 - storytelling
		"NNN84.jpg", // 189 - storytelling
		"NNN85.jpg", // 190 - storytelling
		"NNN86.jpg", // 191 - tem decisao
		"NNN87.jpg", // 192 - storytelling
		"NNN88.jpg", // 193 - storytelling
		"NNN89.jpg", // 194 - storytelling
		"NNN90.jpg", // 195 - tem decisao
		"NNN91.jpg", // 196 - storytelling
		"NNN92.jpg", // 197 - storytelling
		"NNN93.jpg", // 198 - storytelling
		"NNN94.jpg", // 199 - storytelling
		"NNN95.jpg", // 200 - tem decisao
		"NNN96.jpg", // 201 - storytelling
		"NNN97.jpg", // 202 - storytelling
		"NNN99.jpg", // 203 - storytelling
		"NNN100.jpg", // 204 - storytelling
		"NNN101.jpg", // 205 - storytelling
		"NNN102.jpg", // 206 - storytelling
		// TELASFINAIS
		"NNNs115.jpg", // 207
		"NNNs133.jpg", // 208
		"NNNs95.jpg", // 209
		"NNNs160.jpg", // 210
		"NNNs157.jpg", // 211
		"NNNs129.jpg", // 212
		"NNNs154.jpg", // 213
		// TELAS ESSADECISÃOSERÁLEMBRADA
		"NNN_DIBROKEN.jpg", // 214
		"NNN_DIHEART.jpg", // 215
		"NNN_DIWAVE.jpg", // 216 
		"NNN_DIWAVE.jpg", // 217
		"NNN_DIBROKEN.jpg", // 218
		//NB (NBC, NBN)
		//NBC
		"NBC62.jpg", // 219 - storytelling
		"NBC63.jpg", // 220 - tem decisao
		"NBC139.jpg", // 221 - storytelling
		"NBC140.jpg", // 222 - storytelling
		"NBC141.jpg", // 223 - storytelling
		"NBC142.jpg", // 224 - storytelling
		"NBC143.jpg", // 225 - storytelling
		"NBC144.jpg", // 226 - storytelling
		"NBC145.jpg", // 227 - storytelling
		"NBC121.jpg", // 228 - storytelling
		"NBC122,jpg", // 229 - storytelling
		"NBC123.jpg", // 230 - storytelling
		"NBC187.jpg", // 231 - storytelling
		"NBC110.jpg", // 232 - tem decisao
		"NBC111.jpg", // 233 - storytelling
		"NBC112.jpg", // 234 - storytelling
		// TELASFINAIS
		"NBCs180.jpg", // 235
		"NBCs182.jpg", // 236
		// TELAS ESSADECISÃOSERÁLEMBRADA
		"NBC_DIBROKEN.jpg", // 237
		"NBC_DIWAVES.jpg", // 238
		
		// imagem botao
		"botao.jpg", //239
		
		// NBN
		"NBN189.jpg", // 240 - storytelling
		"NBN71.jpg", // 241 - storytelling
		"NBN72.jpg", // 242 - tem decisao
		"NBN81.jpg", // 243 - tem decisao
		"NBN82.jpg", // 244 - tem decisao
		"NBN103.jpg", // 245 - storytelling
		"NBN104.jpg", // 246 - tem decisao
		"NBN113.jpg", // 247 - storytelling
		"NBN105.jpg", // 248 - storytelling
		"NBN106.jpg", // 249 - storytelling
		"NBN107.jpg", // 250 - storytelling
		"NBN108.jpg", // 251 - storytelling
		"NBN109.jpg", // 252 - storytelling
		"NBN98.jpg", //  253 - storytelling
		"NBN84.jpg", // 254 - storytelling
		"NBN85.jpg", // 255 - storytelling
		"NBN86.jpg", // 256 - tem decisao
		"NBN87.jpg", // 257 - storytelling
		"NBN88.jpg", // 258 - storytelling
		"NBN89.jpg", // 259 - storytelling
		"NBN90.jpg", // 260 - tem decisao
		"NBN91.jpg", // 261 - storytelling
		"NBN92.jpg", // 262 - storytelling
		"NBN93.jpg", // 263 - storytelling
		"NBN94.jpg", // 264 - storytelling
		"NBN95.jpg", // 265 - tem decisao
		"NBN96.jpg", // 266 - storytelling
		"NBN97.jpg", // 267 - storytelling
		"NBN99.jpg", // 268 - storytelling
		"NBN100.jpg", // 269 - storytelling
		"NBN101.jpg", // 270 - storytelling
		"NBN102.jpg", // 271 - storytelling
		// TELASFINAIS
		"NBNs115.jpg", // 272
		"NBNs133.jpg", // 273
		"NBNs105.jpg", // 274
		"NBNs154.jpg", // 275
		"NBNs129.jpg", // 276
		"NBNs154.jpg", // 277
		// TELAS ESSADECISÃOSERÁLEMBRADA
		"NBN_DIBROKEN.jpg", // 278
		"NBN_DIHEART.jpg", // 279
		"NBN_DIWAVES.jpg", // 280
		"NBN_DIBROKEN.jpg", // 281
		"NBN_DIHEART.jpg", // 282
		
		// TELAS ESSADECISÃOSERÁLEMBRADA PRINCIPAL
		"DIBEBEPOUCO.jpg", // 283
		"DIBEBEMUITO.jpg", //284
		"DIBEBEPOUCO.jpg", // 285
		
		// TELAS ESQUECIDAS
		"SBC82.jpg", // 286 - SBC - tem decisao
		"SBC62.jpg", // 287 - SBC - storytelling
		"NBN73.jpg", // 288 - NBN - tem decisao
		"NBN74.jpg", // 289 - NBN - tem decisao
		"NBN75.jpg", // 290 - NBN - tem decisao
		"NBN76.jpg", // 291 - NBN - tem decisao
		"NBN77.jpg", // 292 - NBN - storytelling
		"NBN78.jpg", // 293 - NBN - tem decisao
		"NBN79.jpg", // 294 - NBM - storytelling
		"NBN80.jpg", // 295 - NBM - storytelling
		"NNC122.jpg", // 296 -  NNC - storytelling
		
		
		
		
		
];

	var telasAnteriores = [
		1, // esquerdo da 0 - done
		2, // esquerdo da 1 - done
		3, // esquerdo da 2 - done
		4, // esquerdo da 3 - done
		5, // esquerdo da 4 - done
		6, // esquerdo da 5 - done
		7, // esquerdo da 6 - done
		8, // esquerdo da 7 - done
		9, // esquerdo da 8 - done
		11, // esquerdo da 9 - done 
		11, // esquerdo da 10 - done
		12, // esquerdo da 11 - done
		15, // esquerdo da 12 - done
		14, // esquerdo da 13 - done
		12, // esquerdo da 14 - done
		16, // esquerdo da 15 - done
		17, // esquerdo da 16 - done
		18, // esquerdo da 17 - done
		21, // esquerdo da 18 - done
		20, // esquerdo da 19 - done
		21, // esquerdo da 20 - done
		22, // esquerdo da 21 - done
		23, // esquerdo da 22 - done
		24, // esquerdo da 23 - done
		25, // esquerdo da 24 - done
		26, // esquerdo da 25 - done
		27,// esquerdo da 26 - done
		62, // esquerdo da 27 - done
		31, // esquerdo da 28 - done
		30, // esquerdo da 29 - done
		31, // esquerdo da 30 - done
		32, // esquerdo da 31 - done
		33,// esquerdo da 32 - done
		34, // esquerdo da 33 - done
		36,// esquerdo da 34 - done
		34,// esquerdo da 35 - done
		37, // esquerdo da 36 - done
		38, // esquerdo da 37 - done
		39, // esquerdo da 38 - done
		40, // esquerdo da 39 - done
		41, // esquerdo da 40 - done
		43, // esquerdo da 41 - done
		44, // esquerdo da 42 - done
		284, // esquerdo da 43 - done
		63, // esquerdo da 44 - done
		54, // esquerdo da 45 - done
		49, // esquerdo da 46 - done
		54, // esquerdo da 47 - done
		49, // esquerdo da 48 - done
		50, // esquerdo da 49 - done
		51, // esquerdo da 50 - done
		52, // esquerdo da 51 - done
		53, // esquerdo da 52 - done
		54, // esquerdo da 53 - done
		55, // esquerdo da 54 - done
		56, // esquerdo da 55 - done
		57, // esquerdo da 56 - done
		58, // esquerdo da 57 - done
		60, // esquerdo da 58 - done
		60, // esquerdo da 59 - done
		0, // esquerdo da 60 ??? 
		29, // esquerdo da 61 - done
		28, // esquerdo da 62 - done
		48, // esquerdo da 63- done
		138, // esquerdo da 64- done
		219, // esquerdo da 65- done
		287, // esquerdo da 66- done
		101, // esquerdo da 67- done
		87, // esquerdo da 68- done
		70, // esquerdo da 69- done
		71, // esquerdo da 70- done
		72, // esquerdo da 71- done
		73, // esquerdo da 72- done
		286, // esquerdo da 73- done
		75, // esquerdo da 74- done
		76, // esquerdo da 75- done
		77, // esquerdo da 76- done
		78, // esquerdo da 77
		79, // esquerdo da 78
		80, // esquerdo da 79
		81, // esquerdo da 80
		82, // esquerdo da 81
		83, // esquerdo da 82
		91, // esquerdo da 83
		92, // esquerdo da 84
		90, // esquerdo da 85
		74, // esquerdo da 86
		93, // esquerdo da 87
		69, // esquerdo da 88
		85, // esquerdo da 89
		0, // esquerdo da 90
		0, // esquerdo da 91
		0, // esquerdo da 92
		98, // esquerdo da 93
		97, // esquerdo da 94
		96, // esquerdo da 95
		97, // esquerdo da 96
		100, // esquerdo da 97
		94, // esquerdo da 98
		95, // esquerdo da 99
		0, // esquerdo da 100
		102, // esquerdo da 101
		132, // esquerdo da 102
		104, // esquerdo da 103
		128, // esquerdo da 104
		130, // esquerdo da 105-
		107, // esquerdo da 106-
		123, // esquerdo da 107-
		109, // esquerdo da 108
		110, // esquerdo da 109
		111, // esquerdo da 110
		115, // esquerdo da 111-
		124, // esquerdo da 112
		114, // esquerdo da 113-
		111, // esquerdo da 114
		116, // esquerdo da 115
		117, // esquerdo da 116
		118, // esquerdo da 117
		119, // esquerdo da 118
		120, // esquerdo da 119
		125, // esquerdo da 120-
		126, // esquerdo da 121
		114, // esquerdo da 122-
		0, // esquerdo da 123
		0, // esquerdo da 124
		0, // esquerdo da 125
		0, // esquerdo da 126
		122, // esquerdo da 127
		105, // esquerdo da 128-
		103, // esquerdo da 129
		106, // esquerdo da 130-
		113, // esquerdo da 131
		133, // esquerdo da 132
		136, // esquerdo da 133
		135, // esquerdo da 134
		136, // esquerdo da 135
		137, // esquerdo da 136
		0, // esquerdo da 137
		139, // esquerdo da 138
		164, // esquerdo da 139
		141, // esquerdo da 140
		142, // esquerdo da 141
		160, // esquerdo da 142
		144, // esquerdo da 143
		145, // esquerdo da 144
		296, // esquerdo da 145
		147, // esquerdo da 146
		148, // esquerdo da 147
		185, // esquerdo da 148
		157, // esquerdo da 149
		162, // esquerdo da 150
		143, // esquerdo da 151
		153, // esquerdo da 152
		158, // esquerdo da 153
		155, // esquerdo da 154
		156, // esquerdo da 155
		145, // esquerdo da 156
		0, // esquerdo da 157
		0, // esquerdo da 158
		143, // esquerdo da 159
		150, // esquerdo da 160
		140, // esquerdo da 161
		152, // esquerdo da 162
		151, // esquerdo da 163
		165, // esquerdo da 164
		166, // esquerdo da 165
		167, // esquerdo da 166
		168, // esquerdo da 167
		169, // esquerdo da 168
		171, // esquerdo da 169
		215, // esquerdo da 170
		172, // esquerdo da 171
		207, // esquerdo da 172
		174, // esquerdo da 173
		208, // esquerdo da 174
		209, // esquerdo da 175
		177, // esquerdo da 176
		212, // esquerdo da 177
		179, // esquerdo da 178
		180, // esquerdo da 179
		181, // esquerdo da 180
		182, // esquerdo da 181
		183, // esquerdo da 182 
		184, // esquerdo da 183
		185, // esquerdo da 184
		186, // esquerdo da 185
		210, // esquerdo da 186
		211, // esquerdo da 187
		210, // esquerdo da 188
		190, // esquerdo da 189
		191, // esquerdo da 190
		192, // esquerdo da 191
		193, // esquerdo da 192
		208, // esquerdo da 193
		195, // esquerdo da 194
		217, // esquerdo da 195
		197, // esquerdo da 196
		198, // esquerdo da 197
		199, // esquerdo da 198
		200, // esquerdo da 199
		201, // esquerdo da 200
		212, // esquerdo da 201
		208, // esquerdo da 202
		204, // esquerdo da 203
		205, // esquerdo da 204
		206, // esquerdo da 205
		213, // esquerdo da 206
		0, // esquerdo da 207- -unused-
		0, // esquerdo da 208
		0, // esquerdo da 209
		0, // esquerdo da 210
		0, // esquerdo da 211
		0, // esquerdo da 212
		0, // esquerdo da 213
		189, // esquerdo da 214
		176, // esquerdo da 215
		175, // esquerdo da 216
		196, // esquerdo da 217
		203, // esquerdo da 218
		220, // esquerdo da 219
		240, // esquerdo da 220
		222, // esquerdo da 221
		223, // esquerdo da 222
		224, // esquerdo da 223
		225, // esquerdo da 224
		226, // esquerdo da 225
		227, // esquerdo da 226
		228, // esquerdo da 227
		229, // esquerdo da 228
		230, // esquerdo da 229
		231, // esquerdo da 230
		232, // esquerdo da 231
		233, // esquerdo da 232
		235, // esquerdo da 233
		236, // esquerdo da 234
		0, // esquerdo da 235
		0, // esquerdo da 236
		0, // esquerdo da 237 -unused-
		221, // esquerdo da 238
		0, // esquerdo da 239 -unused-
		241, // esquerdo da 240
		242, // esquerdo da 241
		288, // esquerdo da 242
		279, // esquerdo da 243
		253, // esquerdo da 244
		246, // esquerdo da 245
		248, // esquerdo da 246
		275, // esquerdo da 247
		249, // esquerdo da 248
		250, // esquerdo da 249
		251, // esquerdo da 250
		252, // esquerdo da 251
		232, // esquerdo da 252
		273, // esquerdo da 253
		255, // esquerdo da 254
		256, // esquerdo da 255
		257, // esquerdo da 256
		258, // esquerdo da 257
		272, // esquerdo da 258
		260, // esquerdo da 259
		280, // esquerdo da 260
		262, // esquerdo da 261
		263, // esquerdo da 262
		264, // esquerdo da 263
		265, // esquerdo da 264
		266, // esquerdo da 265
		276, // esquerdo da 266
		273, // esquerdo da 267
		269, // esquerdo da 268
		270, // esquerdo da 269
		271, // esquerdo da 270
		275, // esquerdo da 271
		0, // esquerdo da 272
		0, // esquerdo da 273
		0, // esquerdo da 274
		0, // esquerdo da 275
		0, // esquerdo da 276
		0, // esquerdo da 277 -unused-
		254, // esquerdo da 278
		244, // esquerdo da 279
		261, // esquerdo da 280
		268, // esquerdo da 281
		295, // esquerdo da 282
		47, // esquerdo da 283
		46, // esquerdo da 284
		45, // esquerdo da 285
		89, // esquerdo da 286
		68, // esquerdo da 287
		289, // esquerdo da 288-
		290, // esquerdo da 289
		291, // esquerdo da 290
		292, // esquerdo da 291
		272, // esquerdo da 292
		294, // esquerdo da 293
		273, // esquerdo da 294
		274, // esquerdo da 295
		146, // esquerdo da 296
	
		
		];
		
	var telasPosteriores = [
		1, // direito da 0 - done
		2, // direito da 1 - done
		3, // direito da 2 - done
		4, // direito da 3 - done
		5, // direito da 4 - done
		6, // direito da 5 - done
		7, // direito da 6 - done
		8, // direito da 7 - done
		10, // direito da 8 - done
		11, // direito da 9 - done
		11, // direito da 10 - done
		13, // direito da 11 - done
		15, // direito da 12 - done
		12, // direito da 13 - done
		12, // direito da 14 - done
		21, // direito da 15 - done
		19,// direito da 16 - done
		18,// direito da 17 - done
		21, // direito da 18 - done
		20, // direito da 19 - done
		21, // direito da 20 - done
		22, // direito da 21 - done
		23, // direito da 22 - done
		24, // direito da 23 - done
		25, // direito da 24 - done
		26, // direito da 25 - done
		27, // direito da 26 - done
		61, // direito da 27 - done
		31, // direito da 28 - done
		30, // direito da 29 - done
		31, // direito da 30 - done
		32, // direito da 31 - done
		33, // direito da 32 - done
		35, // direito da 33 - done
		36, // direito da 34 - done
		34, // direito da 35 - done
		37, // direito da 36 - done
		38, // direito da 37 - done
		39, // direito da 38 - done
		40, // direito da 39 - done
		42, // direito da 40 - done
		43, // direito da 41 - done
		44, // direito da 42 - done
		283, // direito da 43 - done
		285, // direito da 44 - done
		54, // direito da 45 - done
		49, // direito da 46 - done
		54, // direito da 47 - done
		49, // direito da 48 - done
		50, // direito da 49 - done
		51, // direito da 50 - done
		52, // direito da 51 - done
		53, // direito da 52 - done
		54, // direito da 53 - done
		55, // direito da 54 - done
		56, // direito da 55 - done
		57, // direito da 56 - done
		59, // direito da 57 - done
		60, // direito da 58 - done
		60, // direito da 59 - done
		0, // direito da 60 -
		29, // direito da 61 - done
		28, // direito da 62 - done
		48, // direito da 63 - done
		164, // direito da 64
		240, // direito da 65
		93, // direito da 66 - done
		132, // direito da 67
		88, // direito da 68 - done
		70, // direito da 69 - done
		71, // direito da 70 - done
		72, // direito da 71 - done
		74, // direito da 72 - done
		74, // direito da 73 - done
		75, // direito da 74 - done
		76, // direito da 75 - done 
		77, // direito da 76 - done
		78, // direito da 77 - done
		79, // direito da 78 - done
		80, // direito da 79 - done
		81, // direito da 80 - done
		82, // direito da 81 - done
		84, // direito da 82 - done
		91, // direito da 83 - done
		92, // direito da 84 - done
		90, // direito da 85 - done
		74, // direito da 86 - done
		93, // direito da 87 - done
		69, // direito da 88 - done
		85, // direito da 89 - done
		0, // direito da 90 - done
		0, // direito da 91 - done
		0, // direito da 92 - done
		99, // direito da 93 - done
		97, // direito da 94 - done
		96, // direito da 95 - done
		97, // direito da 96 - done
		100, // direito da 97 - done
		94, // direito da 98 - done
		95, // direito da 99 - done
		0, // direito da 100 - done
		102, // direito da 101- done
		129, // direito da 102- done
		104, // direito da 103- done
		127, // direito da 104- done
		131, // direito da 105- done
		108, // direito da 106- done
		123, // direito da 107- done
		109, // direito da 108- done
		110, // direito da 109- done
		112, // direito da 110- done
		115, // direito da 111- done
		124, // direito da 112- done
		114, // direito da 113- done
		112, // direito da 114- done
		116, // direito da 115- done
		117, // direito da 116- done
		118, // direito da 117- done
		119, // direito da 118- done
		121, // direito da 119- done
		125, // direito da 120- done
		126, // direito da 121- done
		114, // direito da 122- done
		0, // direito da 123- done
		0, // direito da 124- done
		0, // direito da 125- done
		0, // direito da 126- done
		122, // direito da 127- done
 		105, // direito da 128- done
		103, // direito da 129- done
		106, // direito da 130- done
		113, // direito da 131- done
		134, // direito da 132- done
		136, // direito da 133- done
		135, // direito da 134- done
		136, // direito da 135- done
		137, // direito da 136- done
		0, // direito da 137- done
		139, // direito da 138- done
		161, // direito da 139- done
		141, // direito da 140- done
		142, //direito da 141 - done
		159, // direito da 142- done
		144, // direito da 143- done
		149, // direito da 144- done
		296, // direito da 145- done
		147, // direito da 146- done
		148, // direito da 147- done
		185, // direito da 148- done
		157, // direito da 149- done
		163, // direito da 150- done
		143, // direito da 151- done
		154, // direito da 152- done
		158, // direito da 153- done
		155, // direito da 154- done
		156, // direito da 155- done
		149, // direito da 156- done
		0, // direito da 157- done
		0, // direito da 158- done
		143, // direito da 159- done
		150, // direito da 160- done
		140, // direito da 161- done
		152, // direito da 162- done
		151, // direito da 163- done
		165, // direito da 164- done
		166, // direito da 165- done
		170, // direito da 166- done
		169, // direito da 167- done
		170, // direito da 168- done
		171, // direito da 169- done
		214, // direito da 170- done
		173, // direito da 171- done
		207, // direito da 172- done
		216, // direito da 173- done
		208, // direito da 174- done
		209, // direito da 175- done
		178, // direito da 176- done
		212, // direito da 177- done
		179, // direito da 178- done
		188, // direito da 179- done
		181, // direito da 180- done
		182, // direito da 181- done
		183, // direito da 182- done
		184, // direito da 183- done
		185, // direito da 184- done
		187, // direito da 185- done
		210, // direito da 186- done
		211, // direito da 187- done
		210, // direito da 188- done
		190, // direito da 189- done
		191, // direito da 190- done
		194, // direito da 191- done
		193, // direito da 192- done
		208, // direito da 193- done
		195, // direito da 194- done
		218, // direito da 195- done
		197, // direito da 196- done
		198, // direito da 197- done
		199, // direito da 198- done
		200, // direito da 199- done
		202, // direito da 200- done
		212, // direito da 201- done
		208, // direito da 202- done
		204, // direito da 203- done
		205, // direito da 204- done
		206, // direito da 205- done
		213, // direito da 206- done
		0, // direito da 207 -unused- 
		0, // direito da 208- done
		0, // direito da 209- done
		0, // direito da 210- done
		0, // direito da 211- done
		0, // direito da 212- done
		0, // direito da 213- done
		189, // direito da 214- done
		176, // direito da 215- done
		175, // direito da 216- done
		196, // direito da 217- done
		203, // direito da 218- done
		220, // direito da 219 done
		238, // direito da 220 done
		222, // direito da 221 done
		223, // direito da 222 done
		224, // direito da 223 done
		225, // direito da 224 done
		226, // direito da 225 done
		227, // direito da 226 done
		228, // direito da 227 done
		229, // direito da 228 done
		230, // direito da 229 done
		231, // direito da 230 done
		232, // direito da 231 done
		234, // direito da 232 done
		235, // direito da 233 done
		236, // direito da 234 done
		0, // direito da 235 done
		0, // direito da 236 done
		0, // direito da 237 - -unused-
		221, // direito da 238 done
		0, // direito da 239 - -unused-
		241, // direito da 240 done
		242, // direito da 241 done
		243, // direito da 242 done
		278, // direito da 243 done
		245, // direito da 244 done
		246, // direito da 245 done
		247, // direito da 246 done
		275, // direito da 247 done
		249, // direito da 248- done
		250, // direito da 249- done
		251, // direito da 250- done
		252, // direito da 251- done
		232, // direito da 252- done- 
		273, // direito da 253- done- 
		255, // direito da 254- done- 
		256, // direito da 255- done
		259, // direito da 256- done
		258, // direito da 257- done
		272, // direito da 258- done
		260, // direito da 259- done
		281, // direito da 260- done
		262, // direito da 261- done
		263, // direito da 262- done
		264, // direito da 263- done
		265, // direito da 264- done
		267, // direito da 265- done
		276, // direito da 266- done
		273, // direito da 267- done
		269, // direito da 268- done
		270, // direito da 269- done
		271, // direito da 270- done
		275, // direito da 271- done
		0, // direito da 272- done
		0, // direito da 273- done
		0, // direito da 274- done
		0, // direito da 275- done
		0, // direito da 276- done
		0, // direito da 277 -unused-
		254, // direito da 278- done
		244, // direito da 279- done
		261, // direito da 280- done
		268, // direito da 281- done
		295, // direito da 282- done
		47, // direito da 283- done
		46, // direito da 284- done
		45, // direito da 285- done
		86, // direito da 286- done
		68, // direito da 287- done
		290, // direito da 288- done
		243, // direito da 289- done
		243, // direito da 290- done
		293, // direito da 291- done
		272, // direito da 292- done
		282, // direito da 293- done
		273, // direito da 294- done
		274, // direito da 295- done
		146, // direito da 296- done
		
	
		
		
		
		
		];
		
		
	var xBotaoAnterior = [
		
		210, // 0 
		210, // 1 
		210, // 2 
		210, // 3 
		210, // 4 
		210, // 5 
		210, // 6 
		210, // 7 
		494, // 8 - d
		210, // 9
		210, // 10 
		835, // 11 - d
		835, // 12 
		773, // 13 - d
		210, // 14
		64, // 15 - d
		71, // 16 - d
		210, // 17
		210, // 18
		210, // 19
		210, // 20
		210, // 21
		210, // 22
		210, // 23
		210, // 24
		210, // 25
		210, // 26
		510, // 27 - di
		210, // 28
		210, // 29
		210, // 30
		210, // 31
		210, // 32
		201, // 33 - d
		210, // 34
		210, // 35
		210, // 36
		210, // 37
		210, // 38
		210, // 39
		110, // 40 - d
		210, // 41
		210, // 42
		781, // 43 - di
		781, // 44 - di
		210, // 45
		210, // 46
		210, // 47
		210, // 48
		190, // 49 
		190, // 50 - d
		210, // 51
		210, // 52
		210, // 53
		210, // 54
		210, // 55
		110, // 56 
		110, // 57 - d
		210, // 58
		210, // 59
		538, // 60 
		538, // 61 - vv
		795, // 62 
		102, // 63 
		538, // 64 - r
     	538, // 65 - r
		538, // 66 - r
		538, // 67 - r=============================
		795, // 68 - d+++++++++++++++++++++++++++++
		323, // 69
		500, // 70
		500, // 71
		722, // 72 - d 
		272, // 73 - d
		330, // 74 
		390, // 75 
		280, // 76 
		326, // 77
		338, // 78 
		210, // 79
		210, // 80
		384, // 81
		539, // 82 - d
		210, // 83
		210, // 84
		210, // 85
		373, // 86 
		210, // 87
		210, // 88
		550, // 89
		319, // 90 
		210, // 91
		210, // 92
		102, // 93 - d
		210, // 94
		357, // 95 
		210, // 96
		210, // 97
		210, // 98
		210, // 99
		210, // 100
		210, // 101
		795, // 102 - d
		358, // 103
		270, // 104  - d
		721, // 105 - d
		196, // 106 - d
		210, // 107
		210, // 108
		210, // 109
		864, // 110  - d
		321, // 111
		210, // 112
		210, // 113
		805, // 114 - d
		210, // 115
		358, // 116 
		394, // 117 
		550, // 118
		539, // 119 - d
		321, // 120 
		210, // 121
		210, // 122
		210, // 123
		440, // 124
		210, // 125
		210, // 126
		210, // 127
		210, // 128
		210, // 129
		210, // 130
		210, // 131
		102, // 132 - d
		210, // 133
		330, // 134 
		390, // 135 
		210, // 136
		210, // 137
		210, // 138
		795, // 139 - d
		210, // 140
		550, // 141
		270, // 142 - d
		210, // 143
		805, // 144 - d
		210, // 145
		354, // 146 
		210, // 147
		354, // 148 
		358, // 149
		721, // 150 - d
		210, // 151
		196, // 152 - d
		210, // 153
		210, // 154 
		210, // 155
		864, // 156 - d
		210, // 157 
		210, // 158
		210, // 159
		210, // 160
		210, // 161
		210, // 162
		210, // 163
		210, // 164
		210, // 165
		274, // 166 - d
		822, // 167 - d
		224, // 168 - d
		707, // 169 - d
		721, // 170 - d
		144, // 171 - d
		210, // 172
		177, // 173 - d
		210, // 174
		210, // 175
		196, // 176 - d
		210, // 177
		210, // 178
		805, // 179 - d
		210, // 180
		210, // 181
		210, // 182
		210, // 183
		210, // 184
		539, // 185 - d
		210, // 186
		210, // 187
		210, // 188
		210, // 189
		210, // 190
		733, // 191 - d
		210, // 192
		210, // 193
		210, // 194
		882, // 195 - d
		210, // 196
		210, // 197
		210, // 198
		210, // 199
		753, // 200 - d
		210, // 201
		210, // 202
		210, // 203
		210, // 204
		210, // 205
		210, // 206
		210, // 207
		210, // 208
		210, // 209
		210, // 210
		210, // 211
		210, // 212
		210, // 213
		210, // 214
		210, // 215
		210, // 216
		210, // 217
		210, // 218
		210, // 219
		795, // 220 - d
		210, // 221
		210, // 222
		210, // 223
		210, // 224
		210, // 225
		210, // 226
		210, // 227
		210, // 228
		210, // 229
		210, // 230
		210, // 231
		539, // 232 - d
		210, // 233
		210, // 234
		210, // 235
		210, // 236
		210, // 237
        210, // 238
		210, // 239
		210, // 240
		210, // 241
		274, // 242 - d
		722, // 243 - d
		196, // 244 - d
		210, // 245
		805, // 246 - d
		210, // 247
        210, // 248
		210, // 249
		210, // 250
		210, // 251
		210, // 252		
		210, // 253
		210, // 254
		210, // 255
		733, // 256 - d
        210, // 257
		210, // 258
		210, // 259
		882, // 260 - d
		210, // 261
		210, // 262
		210, // 263
		210, // 264
		753, // 265 - d
		210, // 266
		210, // 267
		210, // 268
		210, // 269
		210, // 270
		210, // 271
		210, // 272
		210, // 273
		210, // 274
		210, // 275
		210, // 276
		210, // 277
	    210, // 278
		210, // 279
		210, // 280
		210, // 281
		210, // 282
		210, // 283
		210, // 284
		210, // 285
		196, // 286 - d
		210, // 287
		822, // 288 - d
		224, // 289 - d
		707, // 290 - d
		144, // 291 - d 
		210, // 292
		177, // 293 - d
	    210, // 294
		210, // 295
		210, // 296

		
		]; // 1o botão
			
	var yBotaoAnterior = [
		
				
     	210, // 0 
		210, // 1 
		210, // 2 
		210, // 3 
		210, // 4 
		210, // 5 
		210, // 6 
		210, // 7 
		100, // 8 - d
		210, // 9
		210, // 10 
		360, // 11 - d
		835, // 12 
		395, // 13 - d
		210, // 14
		565, // 15 - d
		320, // 16 - d
		210, // 17
		210, // 18
		210, // 19
		210, // 20
		210, // 21
		210, // 22
		210, // 23
		210, // 24
		210, // 25
		210, // 26
		282, // 27 - di
		210, // 28
		210, // 29
		210, // 30
		210, // 31
		210, // 32
		288, // 33 - d
		210, // 34
		210, // 35
		210, // 36
		210, // 37
		210, // 38
		210, // 39
		320, // 40 - d
		210, // 41
		210, // 42
		354, // 43 - di
		354, // 44 - di
		210, // 45
		210, // 46
		210, // 47
		210, // 48
		190, // 49 
		539, // 50 - d
		210, // 51
		210, // 52
		210, // 53
		210, // 54
		210, // 55
		110, // 56 
		320, // 57 - d
		210, // 58
		210, // 59
		538, // 60 
		257, // 61 - vv
		795, // 62 
		102, // 63 
		257, // 64 - r
		257, // 65 - r
		257, // 66 - r
		257, // 67 - r
		323, // 68 - d
		323, // 69
		500, // 70
		500, // 71
		330, // 72 - d 
		390, // 73 - d
		330, // 74 
		390, // 75 
		280, // 76 
		326, // 77
		338, // 78 
		210, // 79
		210, // 80
		384, // 81
		550, // 82 - d
		210, // 83
		210, // 84
		210, // 85
		373, // 86 
		210, // 87
		210, // 88
		550, // 89
		319, // 90 
		210, // 91
		210, // 92
		357, // 93 - d
		210, // 94
		357, // 95 
		210, // 96
		210, // 97
		210, // 98
		210, // 99
		210, // 100
		210, // 101
		323, // 102 - d
		358, // 103
		358, // 104  - d
		394, // 105 - d
		326, // 106 - d
		210, // 107
		210, // 108
		210, // 109
		321, // 110  - d
		321, // 111
		210, // 112
		210, // 113
		440, // 114 - d
		210, // 115
		358, // 116 
		394, // 117 
		550, // 118
		550, // 119 - d
		321, // 120 
		210, // 121
		210, // 122
		210, // 123
		440, // 124
		210, // 125
		210, // 126
		210, // 127
		210, // 128
		210, // 129
		210, // 130
		210, // 131
		357, // 132 - d
		210, // 133
		330, // 134 
		390, // 135 
		210, // 136
		210, // 137
		210, // 138
		323, // 139 - d
		210, // 140
		550, // 141
		358, // 142 - d
		210, // 143
		440, // 144 - d
		210, // 145
		354, // 146 
		210, // 147
		354, // 148 
		358, // 149
		394, // 150 - d
		210, // 151
		326, // 152 - d
		210, // 153
		210, // 154 
		210, // 155
		321, // 156 - d
		210, // 157 
		210, // 158
		210, // 159
		210, // 160
		210, // 161
		210, // 162
		210, // 163
		210, // 164
		210, // 165
		360, // 166 - d
		352, // 167 - d
		443, // 168 - d
		465, // 169 - d
		394, // 170 - d
		280, // 171 - d
		210, // 172
		338, // 173 - d
		210, // 174
		210, // 175
		326, // 176 - d
		210, // 177
		210, // 178
		440, // 179 - d
		210, // 180
		210, // 181
		210, // 182
		210, // 183
		210, // 184
		550, // 185 - d
		210, // 186
		210, // 187
		210, // 188
		210, // 189
		210, // 190
		373, // 191 - d
		210, // 192
		210, // 193
		210, // 194
		319, // 195 - d
		210, // 196
		210, // 197
		210, // 198
		210, // 199
		381, // 200 - d
		210, // 201
		210, // 202
		210, // 203
		210, // 204
		210, // 205
		210, // 206
		210, // 207
		210, // 208
		210, // 209
		210, // 210
		210, // 211
		210, // 212
		210, // 213
		210, // 214
		210, // 215
		210, // 216
		210, // 217
		210, // 218
		210, // 219
		323, // 220 - d
		210, // 221
		210, // 222
		210, // 223
		210, // 224
		210, // 225
		210, // 226
		210, // 227
		210, // 228
		210, // 229
		210, // 230
		210, // 231
		553, // 232 - d
		210, // 233
		210, // 234
		210, // 235
		210, // 236
		210, // 237
        210, // 238
		210, // 239
		210, // 240
		210, // 241
		360, // 242 - d
		384, // 243 - d
		326, // 244 - d
		210, // 245
		440, // 246 - d
		210, // 247
        210, // 248
		210, // 249
		210, // 250
		210, // 251
		210, // 252		
		210, // 253
		210, // 254
		210, // 255
		373, // 256 - d
        210, // 257
		210, // 258
		210, // 259
		319, // 260 - d
		210, // 261
		210, // 262
		210, // 263
		210, // 264
		381, // 265 - d
		210, // 266
		210, // 267
		210, // 268
		210, // 269
		210, // 270
		210, // 271
		210, // 272
		210, // 273
		210, // 274
		210, // 275
		210, // 276
		210, // 277
		210, // 278
		210, // 279
		210, // 280
		210, // 281
		210, // 282
		210, // 283
		210, // 284
		210, // 285
		326, // 286 - d
		210, // 287
		352, // 288 - d
		443, // 289 - d
		465, // 290 - d
		280, // 291 - d
		210, // 292
		338, // 293 - d
		210, // 294
		210, // 295
		210, // 296

			
			]; // 1o botão
			
	var xBotaoPosterior = [
		
			
		210, // 0 
		210, // 1 
		210, // 2 
		210, // 3 
		210, // 4 
		210, // 5 
		210, // 6 
		210, // 7 
		577, // 8 - d
		210, // 9
		210, // 10 
		835, // 11 - d
		835, // 12 
		773, // 13 - d
		210, // 14
		441, // 15 - d
		71, // 16 - d
		210, // 17
		210, // 18
		210, // 19
		210, // 20
		210, // 21
		210, // 22
		210, // 23
		210, // 24
		210, // 25
		210, // 26
		510, // 27 - di
		210, // 28
		210, // 29
		210, // 30
		210, // 31
		210, // 32
		201, // 33 - d
		210, // 34
		210, // 35
		210, // 36
		210, // 37
		210, // 38
		210, // 39
		110, // 40 - d
		210, // 41
		210, // 42
		781, // 43 - di
		781, // 44 - di
		210, // 45
		210, // 46
		210, // 47
		210, // 48
		190, // 49 
		607, // 50 - d
		210, // 51
		210, // 52
		210, // 53
		210, // 54
		210, // 55
		110, // 56 
		110, // 57 - d
		210, // 58
		210, // 59
		538, // 60 
		538, // 61 - vv
		795, // 62 
		102, // 63 
		538, // 64 - r
		538, // 65 - r
		538, // 66 - r
		538, // 67 - r
		795, // 68 - d
		323, // 69
		500, // 70
		500, // 71
		722, // 72 - d 
		272, // 73 - d
		330, // 74 
		390, // 75 
		280, // 76 
		326, // 77
		338, // 78 
		210, // 79
		210, // 80
		384, // 81
		930, // 82 - d
		210, // 83
		210, // 84
		210, // 85
		373, // 86 
		210, // 87
		210, // 88
		550, // 89
		319, // 90 
		210, // 91
		210, // 92
		102, // 93 - d
		210, // 94
		357, // 95 
		210, // 96
		210, // 97
		210, // 98
		210, // 99
		210, // 100
		210, // 101
		795, // 102 - d
		358, // 103
		270, // 104  - d
		721, // 105 - d
		196, // 106 - d
		210, // 107
		210, // 108
		210, // 109
		864, // 110  - d
		321, // 111
		210, // 112
		210, // 113
		805, // 114 - d
		210, // 115
		358, // 116 
		394, // 117 
		550, // 118
		930, // 119 - d
		321, // 120 
		210, // 121
		210, // 122
		210, // 123
		440, // 124
		210, // 125
		210, // 126
		210, // 127
		210, // 128
		210, // 129
		210, // 130
		210, // 131
		102, // 132 - d
		210, // 133
		330, // 134 
		390, // 135 
		210, // 136
		210, // 137
		210, // 138
		795, // 139 - d
		210, // 140
		550, // 141
		270, // 142 - d
		210, // 143
		805, // 144 - d
		210, // 145
		354, // 146 
		210, // 147
		354, // 148 
		358, // 149
		721, // 150 - d
		210, // 151
		196, // 152 - d
		210, // 153
		210, // 154 
		210, // 155
		864, // 156 - d
		210, // 157 
		210, // 158
		210, // 159
		210, // 160
		210, // 161
		210, // 162
		210, // 163
		210, // 164
		210, // 165
		274, // 166 - d
		822, // 167 - d
		224, // 168 - d
		707, // 169 - d
		722, // 170 - d
		144, // 171 - d
		210, // 172
		177, // 173 - d
		210, // 174
		210, // 175
		196, // 176 - d
		210, // 177
		210, // 178
		805, // 179 - d
		210, // 180
		210, // 181
		210, // 182
		210, // 183
		210, // 184
		930, // 185 - d
		210, // 186
		210, // 187
		210, // 188
		210, // 189
		210, // 190
		733, // 191 - d
		210, // 192
		210, // 193
		210, // 194
		882, // 195 - d
		210, // 196
		210, // 197
		210, // 198
		210, // 199
		753, // 200 - d
		210, // 201
		210, // 202
		210, // 203
		210, // 204
		210, // 205
		210, // 206
		210, // 207
		210, // 208
		210, // 209
		210, // 210
		210, // 211
		210, // 212
		210, // 213
		210, // 214
		210, // 215
		210, // 216
		210, // 217
		210, // 218
		210, // 219
		795, // 220 - d
		210, // 221
		210, // 222
		210, // 223
		210, // 224
		210, // 225
		210, // 226
		210, // 227
		210, // 228
		210, // 229
		210, // 230
		210, // 231
		934, // 232 - d
		210, // 233
		210, // 234
		210, // 235
		210, // 236
		210, // 237
        210, // 238
		210, // 239
		210, // 240
		210, // 241
		274, // 242 - d
		722, // 243 - d
		196, // 244 - d
		210, // 245
		805, // 246 - d
		210, // 247
        210, // 248
		210, // 249
		210, // 250
		210, // 251
		210, // 252		
		210, // 253
		210, // 254
		210, // 255
		733, // 256 - d
        210, // 257
		210, // 258
		210, // 259
		882, // 260 - d
		210, // 261
		210, // 262
		210, // 263
		210, // 264
		753, // 265 - d
		210, // 266
		210, // 267
		210, // 268
		210, // 269
		210, // 270
		210, // 271
		210, // 272
		210, // 273
		210, // 274
		210, // 275
		210, // 276
		210, // 277
		210, // 278
		210, // 279
		210, // 280
		210, // 281
		210, // 282
		210, // 283
		210, // 284
		210, // 285
		196, // 286 - d
		210, // 287
		822, // 288 - d
		224, // 289 - d
		707, // 290 - d
		144, // 291 - d
		210, // 292
		177, // 293 - d
		210, // 294
		210, // 295
		210, // 296
			
			]; // 2o botão
			
	var yBotaoPosterior = [	
		
				
		210, // 0 
		210, // 1 
		210, // 2 
		210, // 3 
		210, // 4 
		210, // 5 
		210, // 6 
		210, // 7 
		238, // 8 - d
		210, // 9
		210, // 10 
		526, // 11 - d
		835, // 12 
		546, // 13 - d
		210, // 14
		565, // 15 - d
		485, // 16 - d
		210, // 17
		210, // 18
		210, // 19
		210, // 20
		210, // 21
		210, // 22
		210, // 23
		210, // 24
		210, // 25
		210, // 26
		430, // 27 - di
		210, // 28
		210, // 29
		210, // 30
		210, // 31
		210, // 32
		428, // 33 - d
		210, // 34
		210, // 35
		210, // 36
		210, // 37
		210, // 38
		210, // 39
		476, // 40 - d
		210, // 41
		210, // 42
		504, // 43 - di
		504, // 44 - di
		210, // 45
		210, // 46
		210, // 47
		210, // 48
		190, // 49 
		539, // 50 - d
		210, // 51
		210, // 52
		210, // 53
		210, // 54
		210, // 55
		110, // 56 
		467, // 57 - d
		210, // 58
		210, // 59
		538, // 60 
		401, // 61 - vv
		795, // 62 
		102, // 63 
    	401, // 64 - r
		401, // 65 - r
		401, // 66 - r
		401, // 67 - r 
		482, // 68 - d
		323, // 69
		500, // 70
		500, // 71
		476, // 72 - d 
		525, // 73 - d
		330, // 74 
		390, // 75 
		280, // 76 
		326, // 77
		338, // 78 
		210, // 79
		210, // 80
		384, // 81
		550, // 82 - d
		210, // 83
		210, // 84
		210, // 85
		373, // 86 
		210, // 87
		210, // 88
		550, // 89
		319, // 90 
		210, // 91
		210, // 92
		509, // 93 - d
		210, // 94
		357, // 95 
		210, // 96
		210, // 97
		210, // 98
		210, // 99
		210, // 100
		210, // 101
		482, // 102 - d
		358, // 103
		491, // 104  - d
		523, // 105 - d
		477, // 106 - d
		210, // 107
		210, // 108
		210, // 109
		448, // 110  - d
		321, // 111
		210, // 112
		210, // 113
		564, // 114 - d
		210, // 115
		358, // 116 
		394, // 117 
		550, // 118
		550, // 119 - d
		321, // 120 
		210, // 121
		210, // 122
		210, // 123
		440, // 124
		210, // 125
		210, // 126
		210, // 127
		210, // 128
		210, // 129
		210, // 130
		210, // 131
		509, // 132 - d
		210, // 133
		330, // 134 
		390, // 135 
		210, // 136
		210, // 137
		210, // 138
		482, // 139 - d
		210, // 140
		550, // 141
		491, // 142 - d
		210, // 143
		564, // 144 - d
		210, // 145
		354, // 146 
		210, // 147
		354, // 148 
		358, // 149
		523, // 150 - d
		210, // 151
		477, // 152 - d
		210, // 153
		210, // 154 
		210, // 155
		448, // 156 - d
		210, // 157 
		210, // 158
		210, // 159
		210, // 160
		210, // 161
		210, // 162
		210, // 163
		210, // 164
		210, // 165
		519, // 166 - d
		491, // 167 - d
		559, // 168 - d
		583, // 169 - d
		523, // 170 - d
		420, // 171 - d
		210, // 172
		503, // 173 - d
		210, // 174
		210, // 175
		477, // 176 - d
		210, // 177
		210, // 178
		564, // 179 - d
		210, // 180
		210, // 181
		210, // 182
		210, // 183
		210, // 184
		550, // 185 - d
		210, // 186
		210, // 187
		210, // 188
		210, // 189
		210, // 190
		513, // 191 - d
		210, // 192
		210, // 193
		210, // 194
		463, // 195 - d
		210, // 196
		210, // 197
		210, // 198
		210, // 199
		512, // 200 - d
		210, // 201
		210, // 202
		210, // 203
		210, // 204
		210, // 205
		210, // 206
		210, // 207
		210, // 208
		210, // 209
		210, // 210
		210, // 211
		210, // 212
		210, // 213
		210, // 214
		210, // 215
		210, // 216
		210, // 217
		210, // 218
		210, // 219
		482, // 220 - d
		210, // 221
		210, // 222
		210, // 223
		210, // 224
		210, // 225
		210, // 226
		210, // 227
		210, // 228
		210, // 229
		210, // 230
		210, // 231
		553, // 232 - d
		210, // 233
		210, // 234
		210, // 235
		210, // 236
		210, // 237
        210, // 238
		210, // 239
		210, // 240
		210, // 241
		519, // 242 - d
		523, // 243 - d
		477, // 244 - d
		210, // 245
		564, // 246 - d
		210, // 247
        210, // 248
		210, // 249
		210, // 250
		210, // 251
		210, // 252		
		210, // 253
		210, // 254
		210, // 255
		513, // 256 - d
        210, // 257
		210, // 258
		210, // 259
		463, // 260 - d
		210, // 261
		210, // 262
		210, // 263
		210, // 264
		512, // 265 - d
		210, // 266
		210, // 267
		210, // 268
		210, // 269
		210, // 270
		210, // 271
		210, // 272
		210, // 273
		210, // 274
		210, // 275
		210, // 276
		210, // 277
		210, // 278
		210, // 279
		210, // 280
		210, // 281
		210, // 282
		210, // 283
		210, // 284
		210, // 285
		477, // 286 - d
		210, // 287
		491, // 288 - d
		559, // 289 - d
		583, // 290 - d
		420, // 291 - d
		210, // 292
		503, // 293 - d
		210, // 294
		210, // 295
		210, // 296		
		
		]; // 2o botão
		
			
	this.preload = function () {
		
		game.load.image("botao","botao.png");
		
		game.load.image("fundo", telas[telaInicial]);
		
	};
	
	
	this.create = function () {
		
		botaoPodeClicar = true;
		
		telaAtual = telaInicial;
		escolhaSalario = 0;
		escolhaBebida = 0;
		
		fundo = game.add.image(0, 0, "fundo");
		
		if (telasAnteriores[telaAtual] === telasPosteriores[telaAtual]) {
			fundo.inputEnabled = true;
			fundo.input.useHandCursor = true;
			fundo.events.onInputDown.add(acaoBotao1);
		}
		
		//botoes de decisao
		botao1 = game.add.image(xBotaoAnterior[telaAtual], yBotaoAnterior[telaAtual], "botao");
		botao1.inputEnabled = true;
		botao1.input.useHandCursor = true;
		botao1.events.onInputDown.add(acaoBotao1);
		
		botao2 = game.add.image(xBotaoPosterior[telaAtual], yBotaoPosterior[telaAtual], "botao");
		botao2.inputEnabled = true;
		botao2.input.useHandCursor = true;
		botao2.events.onInputDown.add(acaoBotao2);
		
		fadeIn();
		
	};
	
	this.update = function () {
		
	};
	
	function fundoCarregado() {
		console.log(telaAtual);
		fundo = game.add.image(0, 0, "fundo");
		fundo.alpha = 0;
		fundo.sendToBack();
		
		if (telasAnteriores[telaAtual] === telasPosteriores[telaAtual]) {
			fundo.inputEnabled = true;
			fundo.input.useHandCursor = true;
			fundo.events.onInputDown.add(acaoBotao1);
		}
		
		botao1.x = xBotaoAnterior[telaAtual];
		botao1.y = yBotaoAnterior[telaAtual];
		
		botao2.x = xBotaoPosterior[telaAtual];
		botao2.y = yBotaoPosterior[telaAtual];
		
		game.add.tween(fundo).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeInOk, this);
		
	}
	
	function fadeOutOk() {
		
		fundo.kill();
		fundo.destroy(true, true);
		telaAtual = telaDepoisDoFadeOut;
		game.load.onLoadComplete.addOnce(fundoCarregado, this);
		game.load.image("fundo", telas[telaAtual]);
		game.load.start();
		
	}
	
	function fadeInOk() {
		
		botaoPodeClicar = true;
		
	}
	
	function acaoBotao1() {
		
		if (botaoPodeClicar == true) {
			
			telaDepoisDoFadeOut = telasAnteriores[telaAtual];
			
			// A tela 60 é onde utiliza as escolhas
			// telaDepoisDoFadeOut é a tela para onde iremos depois do clique do botão
			if (telaAtual == 60) {
				if (escolhaSalario == escolhaSalarioIntegral && escolhaBebida == escolhaBebidaMuito) {
					telaDepoisDoFadeOut = 66;
				} else if (escolhaSalario == escolhaSalarioIntegral && escolhaBebida == escolhaBebidaPouco) {
					telaDepoisDoFadeOut = 67;
				} else if (escolhaSalario == escolhaSalarioMetade && escolhaBebida == escolhaBebidaMuito) {
					telaDepoisDoFadeOut = 65;
				} else if (escolhaSalario == escolhaSalarioMetade && escolhaBebida == escolhaBebidaPouco) {
					telaDepoisDoFadeOut = 64;
				}
			}
			if (telaAtual != telaDepoisDoFadeOut) {
				
				if (telaAtual == telaEscolhaSalario) {
					escolhaSalario = escolhaSalarioIntegral;
				} else if (telaAtual == telaEscolhaBebida || telaAtual == telaEscolhaBebida2) {
					escolhaBebida = escolhaBebidaMuito;
				}
				
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
	function acaoBotao2() {
		
		if (botaoPodeClicar == true) {
			
			telaDepoisDoFadeOut = telasPosteriores[telaAtual];
			
			// A tela 60 é onde utiliza as escolhas
			// telaDepoisDoFadeOut é a tela para onde iremos depois do clique do botão
			if (telaAtual == 60) {
				if (escolhaSalario == escolhaSalarioIntegral && escolhaBebida == escolhaBebidaMuito) {
					telaDepoisDoFadeOut = 66;
				} else if (escolhaSalario == escolhaSalarioIntegral && escolhaBebida == escolhaBebidaPouco) {
					telaDepoisDoFadeOut = 67;
				} else if (escolhaSalario == escolhaSalarioMetade && escolhaBebida == escolhaBebidaMuito) {
					telaDepoisDoFadeOut = 65;
				} else if (escolhaSalario == escolhaSalarioMetade && escolhaBebida == escolhaBebidaPouco) {
					telaDepoisDoFadeOut = 64;
				}
		
			}
			if (telaAtual != telaDepoisDoFadeOut) {
				
				if (telaAtual == telaEscolhaSalario) {
					escolhaSalario = escolhaSalarioMetade;
				} else if (telaAtual == telaEscolhaBebida || telaAtual == telaEscolhaBebida2) {
					escolhaBebida = escolhaBebidaPouco;
				}
				
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
}


