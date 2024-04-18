export const RentMeTheme = {
  name: "rentme-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "24px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "255 255 255",
    "--on-success": "255 255 255",
    "--on-warning": "255 255 255",
    "--on-error": "0 0 0",
    "--on-surface": "0 0 0",
    // =~= Theme Colors  =~=
    // primary | #d3a981
    "--color-primary-50": "248 242 236", // #f8f2ec
    "--color-primary-100": "246 238 230", // #f6eee6
    "--color-primary-200": "244 234 224", // #f4eae0
    "--color-primary-300": "237 221 205", // #edddcd
    "--color-primary-400": "224 195 167", // #e0c3a7
    "--color-primary-500": "211 169 129", // #d3a981
    "--color-primary-600": "190 152 116", // #be9874
    "--color-primary-700": "158 127 97", // #9e7f61
    "--color-primary-800": "127 101 77", // #7f654d
    "--color-primary-900": "103 83 63", // #67533f
    // secondary | #d5d6c4
    "--color-secondary-50": "249 249 246", // #f9f9f6
    "--color-secondary-100": "247 247 243", // #f7f7f3
    "--color-secondary-200": "245 245 240", // #f5f5f0
    "--color-secondary-300": "238 239 231", // #eeefe7
    "--color-secondary-400": "226 226 214", // #e2e2d6
    "--color-secondary-500": "213 214 196", // #d5d6c4
    "--color-secondary-600": "192 193 176", // #c0c1b0
    "--color-secondary-700": "160 161 147", // #a0a193
    "--color-secondary-800": "128 128 118", // #808076
    "--color-secondary-900": "104 105 96", // #686960
    // tertiary | #a21804
    "--color-tertiary-50": "241 220 217", // #f1dcd9
    "--color-tertiary-100": "236 209 205", // #ecd1cd
    "--color-tertiary-200": "232 197 192", // #e8c5c0
    "--color-tertiary-300": "218 163 155", // #daa39b
    "--color-tertiary-400": "190 93 79", // #be5d4f
    "--color-tertiary-500": "162 24 4", // #a21804
    "--color-tertiary-600": "146 22 4", // #921604
    "--color-tertiary-700": "122 18 3", // #7a1203
    "--color-tertiary-800": "97 14 2", // #610e02
    "--color-tertiary-900": "79 12 2", // #4f0c02
    // success | #5048b1
    "--color-success-50": "229 228 243", // #e5e4f3
    "--color-success-100": "220 218 239", // #dcdaef
    "--color-success-200": "211 209 236", // #d3d1ec
    "--color-success-300": "185 182 224", // #b9b6e0
    "--color-success-400": "133 127 200", // #857fc8
    "--color-success-500": "80 72 177", // #5048b1
    "--color-success-600": "72 65 159", // #48419f
    "--color-success-700": "60 54 133", // #3c3685
    "--color-success-800": "48 43 106", // #302b6a
    "--color-success-900": "39 35 87", // #272357
    // warning | #a00ede
    "--color-warning-50": "241 219 250", // #f1dbfa
    "--color-warning-100": "236 207 248", // #eccff8
    "--color-warning-200": "231 195 247", // #e7c3f7
    "--color-warning-300": "217 159 242", // #d99ff2
    "--color-warning-400": "189 86 232", // #bd56e8
    "--color-warning-500": "160 14 222", // #a00ede
    "--color-warning-600": "144 13 200", // #900dc8
    "--color-warning-700": "120 11 167", // #780ba7
    "--color-warning-800": "96 8 133", // #600885
    "--color-warning-900": "78 7 109", // #4e076d
    // error | #b0f06d
    "--color-error-50": "243 253 233", // #f3fde9
    "--color-error-100": "239 252 226", // #effce2
    "--color-error-200": "235 251 219", // #ebfbdb
    "--color-error-300": "223 249 197", // #dff9c5
    "--color-error-400": "200 245 153", // #c8f599
    "--color-error-500": "176 240 109", // #b0f06d
    "--color-error-600": "158 216 98", // #9ed862
    "--color-error-700": "132 180 82", // #84b452
    "--color-error-800": "106 144 65", // #6a9041
    "--color-error-900": "86 118 53", // #567635
    // surface | #6ac1c2
    "--color-surface-50": "233 246 246", // #e9f6f6
    "--color-surface-100": "225 243 243", // #e1f3f3
    "--color-surface-200": "218 240 240", // #daf0f0
    "--color-surface-300": "195 230 231", // #c3e6e7
    "--color-surface-400": "151 212 212", // #97d4d4
    "--color-surface-500": "106 193 194", // #6ac1c2
    "--color-surface-600": "95 174 175", // #5faeaf
    "--color-surface-700": "80 145 146", // #509192
    "--color-surface-800": "64 116 116", // #407474
    "--color-surface-900": "52 95 95", // #345f5f
  },
};
