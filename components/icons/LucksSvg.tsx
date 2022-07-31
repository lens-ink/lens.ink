import { animated, config, useSpring } from "@react-spring/web";

const LucksSvg = () => {
  const { x: path1 } = useSpring({
    reset: false,
    from: { x: 0 },
    x: 1,
    delay: 200,
    duration: 200,
    config: config.slow,
  });

  const { x: path2 } = useSpring({
    reset: false,
    from: { x: 0 },
    x: 1,
    delay: 400,
    duration: 200,
    config: config.slow,
    
  });
  const { x: path3 } = useSpring({
    reset: false,
    from: { x: 0 },
    x: 1,
    delay: 600,
    duration: 200,
    config: config.slow,
  });

  return (
    <svg
      width="200"
      height="130"
      viewBox="0 0 200 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_1_99" fill="white">
        <path d="M100.489 0.134753C97.6766 0.453187 96.2082 1.07236 94.7576 2.52301C93.6961 3.58445 92.9708 4.62821 92.5462 5.70735C92.1217 6.73341 91.874 9.77623 92.1217 10.8731C92.3693 12.0937 92.2101 12.5183 91.8386 11.6338C91.3079 10.4308 90.158 8.78555 89.4327 8.20175C89.0435 7.88332 88.2651 7.42335 87.699 7.15799C86.2837 6.52112 83.7362 6.48575 81.9141 7.10492C77.2437 8.6794 74.4309 11.563 73.3164 15.9149C72.6972 18.3386 73.0156 20.833 74.307 23.7519C75.1208 25.5918 75.8638 26.6355 77.2791 27.927C79.1012 29.5722 80.2865 30.1383 84.8331 31.5359C89.3619 32.9334 93.3069 34.4372 93.3246 34.7733C93.3246 34.9856 88.3181 34.7379 86.8675 34.4549C86.1952 34.3133 84.7623 34.0126 83.6832 33.7649C80.4634 33.0219 76.6422 33.2165 73.5994 34.2956C71.0873 35.1802 68.5752 37.3031 66.6469 40.1867C65.3732 42.115 65.0725 42.9995 64.9132 45.2639C64.754 47.3691 65.0194 48.6959 65.9393 50.6065C67.5492 53.897 71.3881 56.8337 74.1301 56.8337C75.6339 56.8337 77.5798 56.1791 78.7828 55.2946C79.4551 54.7816 79.4904 54.8523 78.9243 55.8253C78.6944 56.2322 78.3229 57.1521 78.0929 57.8774C77.7567 59.0097 77.7214 59.4342 77.8098 61.1502C77.969 64.1931 78.6944 65.7675 80.7996 67.7135C82.2502 69.0226 83.7539 69.8718 85.8945 70.544C88.8489 71.4816 91.2017 71.2694 94.0853 69.8187C94.7399 69.4826 95.3591 69.2172 95.4829 69.2172C95.7483 69.2172 98.0658 67.4128 98.5965 66.7759C99.251 66.0152 100.542 63.8923 100.861 63.0608C101.02 62.654 101.215 62.3178 101.268 62.3178C101.374 62.3178 101.692 63.8569 101.922 65.5022C101.975 65.856 102.011 69.8718 101.958 70.9863C101.958 71.1278 101.852 71.8532 101.728 72.5785C101.586 73.3038 101.445 74.2945 101.392 74.7898C101.215 76.1874 101.162 76.5943 100.649 79.9202C100.206 82.7861 99.6225 85.4397 98.8972 87.7925C98.738 88.3233 98.5611 88.9955 98.508 89.2963C98.3134 90.4108 95.0583 101.308 94.5807 102.387C94.4922 102.582 94.3153 103.13 94.1561 103.626C93.5546 105.589 92.5993 108.225 92.4401 108.385C92.3339 108.491 92.2632 108.721 92.2632 108.915C92.2632 109.11 91.8386 110.596 91.3079 112.206C90.7949 113.816 90.1403 115.815 89.8926 116.664C89.6273 117.513 88.725 119.972 87.9113 122.148C86.2837 126.376 85.1869 129.348 85.1869 129.49C85.1869 129.525 85.5938 129.543 86.0891 129.507L86.9913 129.454L87.9289 127.243C88.4597 126.022 89.1673 124.236 89.5211 123.263C89.8749 122.29 90.441 120.857 90.7595 120.061C91.3433 118.663 92.5285 115.284 92.7939 114.24C92.8824 113.94 94.1384 110.171 95.589 105.837C97.0397 101.503 98.4373 97.2394 98.7026 96.3726C98.968 95.488 99.3395 94.2674 99.5341 93.6305C99.711 92.9936 99.941 92.2329 100.029 91.9499C100.242 91.2599 101.48 86.395 101.569 85.935C101.604 85.7404 101.781 84.8205 101.975 83.9006C102.17 82.9807 102.488 81.3885 102.683 80.3624C103.001 78.6287 103.125 77.8149 103.585 74.3476C103.691 73.6222 103.851 72.3839 103.957 71.6232C104.081 70.7917 104.116 69.2172 104.063 67.8197C103.957 65.166 103.921 64.9361 103.302 61.8756C101.958 55.2592 101.781 54.1801 101.975 54.1801C102.046 54.1801 102.258 54.5162 102.418 54.9231C102.701 55.5953 103.108 56.5506 103.621 57.6475C103.709 57.8598 104.116 58.4435 104.505 58.9566C104.894 59.4696 105.372 60.1949 105.567 60.5664C105.761 60.9556 106.398 61.6987 106.982 62.2117C108.698 63.7685 111.245 64.8299 114.041 65.1307C116.181 65.3783 116.712 65.3076 119.772 64.2992C122.797 63.3085 123.434 62.9724 125.08 61.3979C126.76 59.8057 127.662 58.532 128.388 56.7806C129.75 53.4371 129.75 50.7481 128.423 47.8468C127.786 46.4492 126.318 44.8216 125.292 44.3794C124.743 44.1317 124.797 44.1317 126.318 44.114C129.237 44.0786 130.9 43.2472 132.828 40.8766C133.783 39.6913 134.314 38.4884 134.827 36.2947C135.075 35.1802 135.411 33.8711 135.553 33.358C135.959 32.0135 135.8 30.3506 135.11 28.5284C134.102 25.9102 130.935 21.8767 129.644 21.5583C129.378 21.4875 128.335 21.0806 127.344 20.6384C124.85 19.5592 123.54 19.2762 121.365 19.3646C119.755 19.4354 119.419 19.5238 117.596 20.2669C115.261 21.2398 113.404 22.1598 112.13 22.9735C111.635 23.292 111.192 23.5043 111.139 23.4512C111.086 23.3981 111.44 22.7966 111.935 22.1067C113.457 19.9838 114.624 17.3302 115.084 14.9596C115.544 12.6244 115.014 8.30789 114.023 6.32652C113.598 5.49506 112.731 4.36285 111.599 3.17757C110.113 1.63847 106.398 0.187823 103.408 0.0109158C102.772 -0.0244658 101.462 0.0286087 100.489 0.134753Z" />
        <path d="M34.2374 40.1513C33.1937 40.3282 31.3008 40.9828 30.717 41.3543C28.9656 42.4688 27.9218 44.5209 27.7096 47.1568C27.6565 48.006 27.5326 48.7136 27.4442 48.749C27.3557 48.7667 27.1258 48.2537 26.9135 47.6168C26.2235 45.4762 24.6667 44.0079 22.2608 43.1941C21.2701 42.8757 20.8632 42.8226 19.5718 42.9287C17.6612 43.0526 17.0597 43.2295 14.9014 44.2025C11.664 45.6885 9.93033 47.0507 8.49737 49.3151C7.63052 50.6596 7.34747 51.3849 7.08211 52.8533C6.85213 54.2508 6.99366 56.1791 7.40054 56.9752C7.54207 57.2406 7.80743 57.8067 8.00203 58.249C8.19663 58.6912 8.69197 59.4873 9.09886 60.018C9.48805 60.5488 9.82418 61.0795 9.82418 61.2033C9.82418 61.5394 13.8754 64.883 15.5383 65.909C16.0336 66.2275 16.9713 66.7051 17.6081 66.9882C18.245 67.2712 20.2794 68.2265 22.1193 69.1288C23.9768 70.031 26.312 71.1455 27.3027 71.6232C29.1248 72.4723 29.6202 72.9323 27.9395 72.2247C26.5597 71.6232 21.7478 70.3317 19.4833 69.9426C18.0327 69.6772 16.6174 69.571 14.8837 69.571C9.0104 69.5887 6.46293 70.2787 3.52626 72.6846C2.28791 73.693 1.04956 75.2852 0.66036 76.382C0.271163 77.4257 -0.0472714 79.7255 0.00580097 80.9639C0.129636 83.3345 0.253472 83.5468 2.90709 86.2711C5.57839 88.9778 6.23295 89.4909 7.8782 90.1631C9.77111 90.9415 11.8763 90.7292 13.1677 89.6324C13.9107 88.9955 14.2999 88.8363 13.8577 89.3316C13.5039 89.7562 12.8847 91.2776 12.6547 92.286C12.4424 93.2413 12.6724 95.1165 13.1324 96.0718C13.5923 97.0448 15.0783 98.5308 16.4405 99.38C18.8995 100.901 21.217 101.591 23.9768 101.591C25.339 101.591 25.6574 101.538 26.5597 101.078C28.8948 99.9107 31.1593 97.3986 32.203 94.8335C32.9106 93.1352 33.1052 91.3307 32.8399 89.0663C32.716 88.0225 32.5391 86.448 32.4507 85.5812C32.3799 84.6967 32.2207 83.476 32.1146 82.8391C31.8315 80.9816 31.6015 78.9648 31.4954 77.2665C31.3892 75.7805 31.4069 75.6921 31.6723 76.0282C31.8315 76.2228 32.0084 76.5766 32.0615 76.8243C32.1146 77.0719 32.2738 77.4257 32.3976 77.6203C32.5214 77.8149 32.8222 78.7702 33.0875 79.7432C33.3352 80.7162 33.6713 81.8308 33.8129 82.2199C33.9544 82.6091 34.149 83.3168 34.2198 83.8121C34.432 84.9443 34.9451 86.7665 35.122 86.9965C35.1927 87.0849 35.3166 87.4918 35.3873 87.881C35.4581 88.2702 35.5643 88.6594 35.6527 88.7655C35.7235 88.854 35.8296 89.2255 35.9004 89.5616C35.9535 89.8977 36.1304 90.4108 36.2896 90.7115C36.4311 90.9946 36.7495 91.7553 36.9972 92.3921C37.5633 93.8782 38.2533 95.4526 38.7663 96.461C38.9786 96.9033 39.6685 98.2478 40.2877 99.4684C40.9069 100.689 41.5084 101.998 41.6499 102.387C41.7737 102.777 42.0214 103.254 42.1806 103.449C42.4813 103.785 43.4366 105.837 43.4366 106.102C43.4366 106.191 43.5428 106.386 43.6843 106.527C43.8082 106.686 44.1443 107.199 44.4096 107.695C44.675 108.172 45.2234 109.11 45.6303 109.782C46.0195 110.437 46.4795 111.18 46.6387 111.463C46.7802 111.728 47.1517 112.33 47.4701 112.807C47.7886 113.303 48.0363 113.745 48.0363 113.816C48.0363 113.886 48.567 114.806 49.2038 115.868C49.8584 116.912 50.7429 118.415 51.1675 119.194C51.6098 119.972 52.0697 120.733 52.2113 120.892C52.3351 121.034 52.6359 121.493 52.8481 121.9C53.0781 122.29 53.7327 123.439 54.3342 124.448C54.918 125.456 55.4664 126.394 55.5194 126.535C55.5902 126.677 56.0325 127.402 56.4924 128.128L57.3593 129.454L60.1014 129.56L59.4822 128.8C59.1461 128.375 58.1731 126.942 57.3416 125.598C54.7941 121.511 52.1228 117.177 51.7513 116.487C51.309 115.656 51.1321 115.372 50.2476 114.099C48.85 112.047 48.2132 111.038 47.824 110.26C47.6117 109.818 47.0809 108.827 46.6387 108.048C44.8696 104.846 41.5437 98.124 40.3054 95.2227C38.4479 90.8707 36.4134 85.3335 36.095 83.7237C36.0242 83.3875 35.9004 83.016 35.8296 82.9276C35.7589 82.8214 35.635 82.4676 35.5643 82.1315C35.5112 81.7954 35.2989 81.1054 35.122 80.5924C34.7328 79.5309 34.0605 76.9658 34.0782 76.612C34.0959 76.1874 35.3166 79.0179 36.0065 81.1054C36.3957 82.2553 36.8203 83.3698 36.9618 83.5821C37.1034 83.8121 37.2626 84.2544 37.3333 84.5551C37.4041 84.8736 37.5279 85.192 37.6341 85.2451C37.7225 85.2981 37.9525 85.705 38.1294 86.1119C38.6601 87.3326 41.7206 90.2339 43.1713 90.9061C45.878 92.1622 49.4161 92.5337 51.6805 91.8437C55.0241 90.8177 56.5809 89.3139 57.1293 86.5542C57.2708 85.8289 57.6247 84.5551 57.9254 83.7237C58.4738 82.2199 58.6153 80.787 58.3677 79.5133C58.2084 78.6995 57.1824 77.6203 56.1386 77.1427L55.2187 76.7358L56.3863 76.6297C59.5706 76.3643 61.9058 74.436 62.7904 71.3401C62.985 70.6679 63.0911 69.4826 63.1088 67.4482C63.1442 64.8476 63.1088 64.4053 62.755 63.3616C62.3835 62.2648 61.4812 60.8495 60.6852 60.1419C59.5529 59.1158 56.5986 58.249 54.2988 58.249C52.9189 58.249 50.1238 58.7974 47.9655 59.505C47.0986 59.788 46.3556 59.9826 46.3026 59.9473C46.2141 59.8411 46.3026 59.6111 46.7802 58.8681C48.6377 55.8784 49.4515 54.0562 49.6638 52.4818C49.8938 50.5888 49.7523 47.9175 49.3631 46.9269C48.9385 45.8654 47.4701 43.6718 46.5502 42.7165C45.3473 41.4427 44.6219 41.1243 41.6499 40.5582C39.4916 40.1336 38.5363 40.0275 36.8203 40.0451C35.635 40.0628 34.4851 40.1159 34.2374 40.1513ZM33.7067 72.3839C33.7067 72.4723 33.5829 72.6846 33.4237 72.8438C33.1937 73.0738 33.0875 73.0915 32.9814 72.9146C32.9106 72.7731 32.9637 72.5962 33.1406 72.4546C33.4944 72.1893 33.7067 72.1716 33.7067 72.3839ZM31.0531 73.2861C31.2123 73.5869 31.1946 73.6399 30.8231 73.6399C30.5931 73.6399 30.257 73.4807 30.0801 73.2861C29.7617 72.9323 29.7794 72.9323 30.3101 72.9323C30.6816 72.9323 30.9293 73.0561 31.0531 73.2861Z" />
        <path d="M171.624 43.3887C169.413 43.9548 168.157 44.6624 166.724 46.1838C165.22 47.7583 164.565 49.0498 163.946 51.7034C163.557 53.3663 163.504 54.0032 163.469 57.9836C163.415 62.2648 163.539 63.8392 164.176 67.802C164.406 69.1642 164.017 68.3858 163.309 66.0329C162.425 63.1316 162.124 62.3178 161.381 60.7257C161.045 60.0003 160.603 59.0274 160.408 58.5851C159.913 57.4175 157.896 54.4101 156.87 53.2779C155.207 51.4557 151.722 49.3859 149.741 49.0498C147.511 48.6606 144.203 49.6335 142.08 51.2965C141.054 52.0749 138.914 54.6754 137.994 56.2145C137.127 57.6652 136.649 59.2927 136.543 61.0795C136.472 62.3355 136.508 62.7424 136.826 63.5916C137.516 65.3783 139.144 67.0413 141.037 67.8727C141.444 68.0496 141.744 68.2619 141.709 68.3327C141.674 68.4035 141.09 68.5096 140.435 68.5627C137.675 68.7927 135.287 70.261 134.19 72.4016C133.624 73.5161 133.27 75.3206 133.394 76.4528C133.677 78.841 135.022 82.1138 136.649 84.3075C137.675 85.705 139.94 87.368 142.027 88.2702C143.443 88.8717 146.432 89.084 148.078 88.7125C150.147 88.2171 151.633 87.7218 152.394 87.2264C152.836 86.9611 153.226 86.7665 153.261 86.8196C153.314 86.8549 152.872 87.4918 152.306 88.2348C148.944 92.5337 148.078 93.6482 147.37 94.6566C146.928 95.2757 146.574 95.8065 146.574 95.8419C146.574 95.8949 146.309 96.3018 145.972 96.7618C145.406 97.5755 143.071 101.609 141.709 104.157C141.337 104.829 140.541 106.226 139.94 107.252C139.338 108.278 138.507 109.747 138.082 110.525C137.675 111.304 137.074 112.418 136.755 113.002C135.606 115.125 129.29 127.756 128.565 129.401C128.529 129.49 129.007 129.543 129.644 129.543H130.776L131.431 128.251C131.784 127.561 132.174 126.783 132.297 126.535C132.439 126.288 133.518 124.112 134.721 121.688C135.924 119.282 137.145 116.929 137.445 116.469C137.728 116.027 138.365 114.895 138.843 113.975C139.338 113.055 140.311 111.321 141.037 110.136C141.744 108.933 142.328 107.925 142.328 107.889C142.328 107.872 142.735 107.129 143.23 106.262C143.726 105.395 144.469 104.086 144.858 103.36C146.485 100.353 146.68 99.9992 147.529 98.6724C147.901 98.0886 148.449 97.2394 148.75 96.7618C149.051 96.3018 149.351 95.9303 149.44 95.9303C149.511 95.9303 149.581 95.8418 149.581 95.7534C149.581 95.6473 150.678 94.1258 152.023 92.3745C153.349 90.6054 155.119 88.1994 155.95 87.0142C158.161 83.8652 158.657 83.1929 158.816 83.1929C158.887 83.1929 158.957 83.0868 158.957 82.963C158.957 82.8391 159.364 82.1846 159.842 81.5123C160.337 80.8401 160.726 80.2209 160.726 80.1324C160.726 79.7963 161.912 78.5403 162.779 77.9742C164.212 77.0189 164.388 77.0012 163.84 77.8503C163.592 78.2572 163.38 78.6464 163.38 78.6995C163.38 79.1064 161.169 82.3969 159.824 84.0244C158.374 85.7581 156.304 88.6417 156.304 88.9424C156.304 88.9955 156.109 89.4732 155.879 89.9685C155.207 91.4015 154.906 92.6398 154.694 94.7981C154.305 98.5839 154.942 100.565 157.312 102.847C159.647 105.094 160.39 105.572 162.938 106.421C164.972 107.093 167.254 107.235 169.36 106.846C171.217 106.492 172.349 105.961 173.818 104.776C175.18 103.661 175.622 103.184 176.259 102.122C176.684 101.397 176.737 101.184 176.701 99.8223C176.666 98.5132 176.471 97.3986 176.029 95.9834C175.817 95.2934 176.188 95.5411 176.56 96.3372C177.02 97.3102 178.453 98.8316 179.603 99.5923C182.398 101.397 186.643 100.954 189.934 98.4955C192.216 96.8148 193.171 95.5588 194.321 92.7636L195.082 90.9238L195.011 88.7832C194.958 86.678 194.94 86.625 194.215 85.1389C193.808 84.3075 193.313 83.3875 193.101 83.0691L192.729 82.503L193.667 82.0254C194.746 81.4769 195.507 80.9108 197.293 79.354C199.345 77.5319 200 75.6213 200 71.4817C200 66.1037 198.426 62.5832 194.87 59.965C192.994 58.5851 189.969 58.4436 187.227 59.5935C186.661 59.8234 186.166 60.018 186.113 60.018C185.883 60.018 186.077 59.6111 186.785 58.5497C187.546 57.4175 187.67 57.1698 188.218 55.5069C188.572 54.4101 188.589 52.5702 188.253 51.438C187.687 49.5982 185.989 47.4045 183.831 45.7416C182.61 44.8217 181.92 44.5032 179.443 43.7425C177.002 42.9818 173.782 42.8403 171.624 43.3887ZM165.202 73.2684C165.273 73.5869 165.043 73.9938 164.778 73.9938C164.548 73.9938 164.442 73.4099 164.636 73.18C164.919 72.8438 165.096 72.8792 165.202 73.2684ZM166.741 75.7628C166.741 75.8513 166.618 75.8867 166.476 75.8336C166.334 75.7628 166.211 75.6921 166.211 75.6567C166.211 75.6213 166.334 75.5859 166.476 75.5859C166.618 75.5859 166.741 75.6567 166.741 75.7628Z" />
      </mask>
      <animated.path
        d="M100.489 0.134753C97.6766 0.453187 96.2082 1.07236 94.7576 2.52301C93.6961 3.58445 92.9708 4.62821 92.5462 5.70735C92.1217 6.73341 91.874 9.77623 92.1217 10.8731C92.3693 12.0937 92.2101 12.5183 91.8386 11.6338C91.3079 10.4308 90.158 8.78555 89.4327 8.20175C89.0435 7.88332 88.2651 7.42335 87.699 7.15799C86.2837 6.52112 83.7362 6.48575 81.9141 7.10492C77.2437 8.6794 74.4309 11.563 73.3164 15.9149C72.6972 18.3386 73.0156 20.833 74.307 23.7519C75.1208 25.5918 75.8638 26.6355 77.2791 27.927C79.1012 29.5722 80.2865 30.1383 84.8331 31.5359C89.3619 32.9334 93.3069 34.4372 93.3246 34.7733C93.3246 34.9856 88.3181 34.7379 86.8675 34.4549C86.1952 34.3133 84.7623 34.0126 83.6832 33.7649C80.4634 33.0219 76.6422 33.2165 73.5994 34.2956C71.0873 35.1802 68.5752 37.3031 66.6469 40.1867C65.3732 42.115 65.0725 42.9995 64.9132 45.2639C64.754 47.3691 65.0194 48.6959 65.9393 50.6065C67.5492 53.897 71.3881 56.8337 74.1301 56.8337C75.6339 56.8337 77.5798 56.1791 78.7828 55.2946C79.4551 54.7816 79.4904 54.8523 78.9243 55.8253C78.6944 56.2322 78.3229 57.1521 78.0929 57.8774C77.7567 59.0097 77.7214 59.4342 77.8098 61.1502C77.969 64.1931 78.6944 65.7675 80.7996 67.7135C82.2502 69.0226 83.7539 69.8718 85.8945 70.544C88.8489 71.4816 91.2017 71.2694 94.0853 69.8187C94.7399 69.4826 95.3591 69.2172 95.4829 69.2172C95.7483 69.2172 98.0658 67.4128 98.5965 66.7759C99.251 66.0152 100.542 63.8923 100.861 63.0608C101.02 62.654 101.215 62.3178 101.268 62.3178C101.374 62.3178 101.692 63.8569 101.922 65.5022C101.975 65.856 102.011 69.8718 101.958 70.9863C101.958 71.1278 101.852 71.8532 101.728 72.5785C101.586 73.3038 101.445 74.2945 101.392 74.7898C101.215 76.1874 101.162 76.5943 100.649 79.9202C100.206 82.7861 99.6225 85.4397 98.8972 87.7925C98.738 88.3233 98.5611 88.9955 98.508 89.2963C98.3134 90.4108 95.0583 101.308 94.5807 102.387C94.4922 102.582 94.3153 103.13 94.1561 103.626C93.5546 105.589 92.5993 108.225 92.4401 108.385C92.3339 108.491 92.2632 108.721 92.2632 108.915C92.2632 109.11 91.8386 110.596 91.3079 112.206C90.7949 113.816 90.1403 115.815 89.8926 116.664C89.6273 117.513 88.725 119.972 87.9113 122.148C86.2837 126.376 85.1869 129.348 85.1869 129.49C85.1869 129.525 85.5938 129.543 86.0891 129.507L86.9913 129.454L87.9289 127.243C88.4597 126.022 89.1673 124.236 89.5211 123.263C89.8749 122.29 90.441 120.857 90.7595 120.061C91.3433 118.663 92.5285 115.284 92.7939 114.24C92.8824 113.94 94.1384 110.171 95.589 105.837C97.0397 101.503 98.4373 97.2394 98.7026 96.3726C98.968 95.488 99.3395 94.2674 99.5341 93.6305C99.711 92.9936 99.941 92.2329 100.029 91.9499C100.242 91.2599 101.48 86.395 101.569 85.935C101.604 85.7404 101.781 84.8205 101.975 83.9006C102.17 82.9807 102.488 81.3885 102.683 80.3624C103.001 78.6287 103.125 77.8149 103.585 74.3476C103.691 73.6222 103.851 72.3839 103.957 71.6232C104.081 70.7917 104.116 69.2172 104.063 67.8197C103.957 65.166 103.921 64.9361 103.302 61.8756C101.958 55.2592 101.781 54.1801 101.975 54.1801C102.046 54.1801 102.258 54.5162 102.418 54.9231C102.701 55.5953 103.108 56.5506 103.621 57.6475C103.709 57.8598 104.116 58.4435 104.505 58.9566C104.894 59.4696 105.372 60.1949 105.567 60.5664C105.761 60.9556 106.398 61.6987 106.982 62.2117C108.698 63.7685 111.245 64.8299 114.041 65.1307C116.181 65.3783 116.712 65.3076 119.772 64.2992C122.797 63.3085 123.434 62.9724 125.08 61.3979C126.76 59.8057 127.662 58.532 128.388 56.7806C129.75 53.4371 129.75 50.7481 128.423 47.8468C127.786 46.4492 126.318 44.8216 125.292 44.3794C124.743 44.1317 124.797 44.1317 126.318 44.114C129.237 44.0786 130.9 43.2472 132.828 40.8766C133.783 39.6913 134.314 38.4884 134.827 36.2947C135.075 35.1802 135.411 33.8711 135.553 33.358C135.959 32.0135 135.8 30.3506 135.11 28.5284C134.102 25.9102 130.935 21.8767 129.644 21.5583C129.378 21.4875 128.335 21.0806 127.344 20.6384C124.85 19.5592 123.54 19.2762 121.365 19.3646C119.755 19.4354 119.419 19.5238 117.596 20.2669C115.261 21.2398 113.404 22.1598 112.13 22.9735C111.635 23.292 111.192 23.5043 111.139 23.4512C111.086 23.3981 111.44 22.7966 111.935 22.1067C113.457 19.9838 114.624 17.3302 115.084 14.9596C115.544 12.6244 115.014 8.30789 114.023 6.32652C113.598 5.49506 112.731 4.36285 111.599 3.17757C110.113 1.63847 106.398 0.187823 103.408 0.0109158C102.772 -0.0244658 101.462 0.0286087 100.489 0.134753Z"
        stroke="#00501E"
        strokeWidth="4"
        strokeDasharray={460}
        strokeDashoffset={path1.to((x) => (1 - x) * 460)}
        mask="url(#path-1-inside-1_1_99)"
      />
      <animated.path
        d="M34.2374 40.1513C33.1937 40.3282 31.3008 40.9828 30.717 41.3543C28.9656 42.4688 27.9218 44.5209 27.7096 47.1568C27.6565 48.006 27.5326 48.7136 27.4442 48.749C27.3557 48.7667 27.1258 48.2537 26.9135 47.6168C26.2235 45.4762 24.6667 44.0079 22.2608 43.1941C21.2701 42.8757 20.8632 42.8226 19.5718 42.9287C17.6612 43.0526 17.0597 43.2295 14.9014 44.2025C11.664 45.6885 9.93033 47.0507 8.49737 49.3151C7.63052 50.6596 7.34747 51.3849 7.08211 52.8533C6.85213 54.2508 6.99366 56.1791 7.40054 56.9752C7.54207 57.2406 7.80743 57.8067 8.00203 58.249C8.19663 58.6912 8.69197 59.4873 9.09886 60.018C9.48805 60.5488 9.82418 61.0795 9.82418 61.2033C9.82418 61.5394 13.8754 64.883 15.5383 65.909C16.0336 66.2275 16.9713 66.7051 17.6081 66.9882C18.245 67.2712 20.2794 68.2265 22.1193 69.1288C23.9768 70.031 26.312 71.1455 27.3027 71.6232C29.1248 72.4723 29.6202 72.9323 27.9395 72.2247C26.5597 71.6232 21.7478 70.3317 19.4833 69.9426C18.0327 69.6772 16.6174 69.571 14.8837 69.571C9.0104 69.5887 6.46293 70.2787 3.52626 72.6846C2.28791 73.693 1.04956 75.2852 0.66036 76.382C0.271163 77.4257 -0.0472714 79.7255 0.00580097 80.9639C0.129636 83.3345 0.253472 83.5468 2.90709 86.2711C5.57839 88.9778 6.23295 89.4909 7.8782 90.1631C9.77111 90.9415 11.8763 90.7292 13.1677 89.6324C13.9107 88.9955 14.2999 88.8363 13.8577 89.3316C13.5039 89.7562 12.8847 91.2776 12.6547 92.286C12.4424 93.2413 12.6724 95.1165 13.1324 96.0718C13.5923 97.0448 15.0783 98.5308 16.4405 99.38C18.8995 100.901 21.217 101.591 23.9768 101.591C25.339 101.591 25.6574 101.538 26.5597 101.078C28.8948 99.9107 31.1593 97.3986 32.203 94.8335C32.9106 93.1352 33.1052 91.3307 32.8399 89.0663C32.716 88.0225 32.5391 86.448 32.4507 85.5812C32.3799 84.6967 32.2207 83.476 32.1146 82.8391C31.8315 80.9816 31.6015 78.9648 31.4954 77.2665C31.3892 75.7805 31.4069 75.6921 31.6723 76.0282C31.8315 76.2228 32.0084 76.5766 32.0615 76.8243C32.1146 77.0719 32.2738 77.4257 32.3976 77.6203C32.5214 77.8149 32.8222 78.7702 33.0875 79.7432C33.3352 80.7162 33.6713 81.8308 33.8129 82.2199C33.9544 82.6091 34.149 83.3168 34.2198 83.8121C34.432 84.9443 34.9451 86.7665 35.122 86.9965C35.1927 87.0849 35.3166 87.4918 35.3873 87.881C35.4581 88.2702 35.5643 88.6594 35.6527 88.7655C35.7235 88.854 35.8296 89.2255 35.9004 89.5616C35.9535 89.8977 36.1304 90.4108 36.2896 90.7115C36.4311 90.9946 36.7495 91.7553 36.9972 92.3921C37.5633 93.8782 38.2533 95.4526 38.7663 96.461C38.9786 96.9033 39.6685 98.2478 40.2877 99.4684C40.9069 100.689 41.5084 101.998 41.6499 102.387C41.7737 102.777 42.0214 103.254 42.1806 103.449C42.4813 103.785 43.4366 105.837 43.4366 106.102C43.4366 106.191 43.5428 106.386 43.6843 106.527C43.8082 106.686 44.1443 107.199 44.4096 107.695C44.675 108.172 45.2234 109.11 45.6303 109.782C46.0195 110.437 46.4795 111.18 46.6387 111.463C46.7802 111.728 47.1517 112.33 47.4701 112.807C47.7886 113.303 48.0363 113.745 48.0363 113.816C48.0363 113.886 48.567 114.806 49.2038 115.868C49.8584 116.912 50.7429 118.415 51.1675 119.194C51.6098 119.972 52.0697 120.733 52.2113 120.892C52.3351 121.034 52.6359 121.493 52.8481 121.9C53.0781 122.29 53.7327 123.439 54.3342 124.448C54.918 125.456 55.4664 126.394 55.5194 126.535C55.5902 126.677 56.0325 127.402 56.4924 128.128L57.3593 129.454L60.1014 129.56L59.4822 128.8C59.1461 128.375 58.1731 126.942 57.3416 125.598C54.7941 121.511 52.1228 117.177 51.7513 116.487C51.309 115.656 51.1321 115.372 50.2476 114.099C48.85 112.047 48.2132 111.038 47.824 110.26C47.6117 109.818 47.0809 108.827 46.6387 108.048C44.8696 104.846 41.5437 98.124 40.3054 95.2227C38.4479 90.8707 36.4134 85.3335 36.095 83.7237C36.0242 83.3875 35.9004 83.016 35.8296 82.9276C35.7589 82.8214 35.635 82.4676 35.5643 82.1315C35.5112 81.7954 35.2989 81.1054 35.122 80.5924C34.7328 79.5309 34.0605 76.9658 34.0782 76.612C34.0959 76.1874 35.3166 79.0179 36.0065 81.1054C36.3957 82.2553 36.8203 83.3698 36.9618 83.5821C37.1034 83.8121 37.2626 84.2544 37.3333 84.5551C37.4041 84.8736 37.5279 85.192 37.6341 85.2451C37.7225 85.2981 37.9525 85.705 38.1294 86.1119C38.6601 87.3326 41.7206 90.2339 43.1713 90.9061C45.878 92.1622 49.4161 92.5337 51.6805 91.8437C55.0241 90.8177 56.5809 89.3139 57.1293 86.5542C57.2708 85.8289 57.6247 84.5551 57.9254 83.7237C58.4738 82.2199 58.6153 80.787 58.3677 79.5133C58.2084 78.6995 57.1824 77.6203 56.1386 77.1427L55.2187 76.7358L56.3863 76.6297C59.5706 76.3643 61.9058 74.436 62.7904 71.3401C62.985 70.6679 63.0911 69.4826 63.1088 67.4482C63.1442 64.8476 63.1088 64.4053 62.755 63.3616C62.3835 62.2648 61.4812 60.8495 60.6852 60.1419C59.5529 59.1158 56.5986 58.249 54.2988 58.249C52.9189 58.249 50.1238 58.7974 47.9655 59.505C47.0986 59.788 46.3556 59.9826 46.3026 59.9473C46.2141 59.8411 46.3026 59.6111 46.7802 58.8681C48.6377 55.8784 49.4515 54.0562 49.6638 52.4818C49.8938 50.5888 49.7523 47.9175 49.3631 46.9269C48.9385 45.8654 47.4701 43.6718 46.5502 42.7165C45.3473 41.4427 44.6219 41.1243 41.6499 40.5582C39.4916 40.1336 38.5363 40.0275 36.8203 40.0451C35.635 40.0628 34.4851 40.1159 34.2374 40.1513ZM33.7067 72.3839C33.7067 72.4723 33.5829 72.6846 33.4237 72.8438C33.1937 73.0738 33.0875 73.0915 32.9814 72.9146C32.9106 72.7731 32.9637 72.5962 33.1406 72.4546C33.4944 72.1893 33.7067 72.1716 33.7067 72.3839ZM31.0531 73.2861C31.2123 73.5869 31.1946 73.6399 30.8231 73.6399C30.5931 73.6399 30.257 73.4807 30.0801 73.2861C29.7617 72.9323 29.7794 72.9323 30.3101 72.9323C30.6816 72.9323 30.9293 73.0561 31.0531 73.2861Z"
        stroke="#00501E"
        strokeWidth="4"
        strokeDasharray={450}
        strokeDashoffset={path2.to((x) => (1 - x) * 450)}
        mask="url(#path-1-inside-1_1_99)"
      />
      <animated.path
        d="M171.624 43.3887C169.413 43.9548 168.157 44.6624 166.724 46.1838C165.22 47.7583 164.565 49.0498 163.946 51.7034C163.557 53.3663 163.504 54.0032 163.469 57.9836C163.415 62.2648 163.539 63.8392 164.176 67.802C164.406 69.1642 164.017 68.3858 163.309 66.0329C162.425 63.1316 162.124 62.3178 161.381 60.7257C161.045 60.0003 160.603 59.0274 160.408 58.5851C159.913 57.4175 157.896 54.4101 156.87 53.2779C155.207 51.4557 151.722 49.3859 149.741 49.0498C147.511 48.6606 144.203 49.6335 142.08 51.2965C141.054 52.0749 138.914 54.6754 137.994 56.2145C137.127 57.6652 136.649 59.2927 136.543 61.0795C136.472 62.3355 136.508 62.7424 136.826 63.5916C137.516 65.3783 139.144 67.0413 141.037 67.8727C141.444 68.0496 141.744 68.2619 141.709 68.3327C141.674 68.4035 141.09 68.5096 140.435 68.5627C137.675 68.7927 135.287 70.261 134.19 72.4016C133.624 73.5161 133.27 75.3206 133.394 76.4528C133.677 78.841 135.022 82.1138 136.649 84.3075C137.675 85.705 139.94 87.368 142.027 88.2702C143.443 88.8717 146.432 89.084 148.078 88.7125C150.147 88.2171 151.633 87.7218 152.394 87.2264C152.836 86.9611 153.226 86.7665 153.261 86.8196C153.314 86.8549 152.872 87.4918 152.306 88.2348C148.944 92.5337 148.078 93.6482 147.37 94.6566C146.928 95.2757 146.574 95.8065 146.574 95.8419C146.574 95.8949 146.309 96.3018 145.972 96.7618C145.406 97.5755 143.071 101.609 141.709 104.157C141.337 104.829 140.541 106.226 139.94 107.252C139.338 108.278 138.507 109.747 138.082 110.525C137.675 111.304 137.074 112.418 136.755 113.002C135.606 115.125 129.29 127.756 128.565 129.401C128.529 129.49 129.007 129.543 129.644 129.543H130.776L131.431 128.251C131.784 127.561 132.174 126.783 132.297 126.535C132.439 126.288 133.518 124.112 134.721 121.688C135.924 119.282 137.145 116.929 137.445 116.469C137.728 116.027 138.365 114.895 138.843 113.975C139.338 113.055 140.311 111.321 141.037 110.136C141.744 108.933 142.328 107.925 142.328 107.889C142.328 107.872 142.735 107.129 143.23 106.262C143.726 105.395 144.469 104.086 144.858 103.36C146.485 100.353 146.68 99.9992 147.529 98.6724C147.901 98.0886 148.449 97.2394 148.75 96.7618C149.051 96.3018 149.351 95.9303 149.44 95.9303C149.511 95.9303 149.581 95.8418 149.581 95.7534C149.581 95.6473 150.678 94.1258 152.023 92.3745C153.349 90.6054 155.119 88.1994 155.95 87.0142C158.161 83.8652 158.657 83.1929 158.816 83.1929C158.887 83.1929 158.957 83.0868 158.957 82.963C158.957 82.8391 159.364 82.1846 159.842 81.5123C160.337 80.8401 160.726 80.2209 160.726 80.1324C160.726 79.7963 161.912 78.5403 162.779 77.9742C164.212 77.0189 164.388 77.0012 163.84 77.8503C163.592 78.2572 163.38 78.6464 163.38 78.6995C163.38 79.1064 161.169 82.3969 159.824 84.0244C158.374 85.7581 156.304 88.6417 156.304 88.9424C156.304 88.9955 156.109 89.4732 155.879 89.9685C155.207 91.4015 154.906 92.6398 154.694 94.7981C154.305 98.5839 154.942 100.565 157.312 102.847C159.647 105.094 160.39 105.572 162.938 106.421C164.972 107.093 167.254 107.235 169.36 106.846C171.217 106.492 172.349 105.961 173.818 104.776C175.18 103.661 175.622 103.184 176.259 102.122C176.684 101.397 176.737 101.184 176.701 99.8223C176.666 98.5132 176.471 97.3986 176.029 95.9834C175.817 95.2934 176.188 95.5411 176.56 96.3372C177.02 97.3102 178.453 98.8316 179.603 99.5923C182.398 101.397 186.643 100.954 189.934 98.4955C192.216 96.8148 193.171 95.5588 194.321 92.7636L195.082 90.9238L195.011 88.7832C194.958 86.678 194.94 86.625 194.215 85.1389C193.808 84.3075 193.313 83.3875 193.101 83.0691L192.729 82.503L193.667 82.0254C194.746 81.4769 195.507 80.9108 197.293 79.354C199.345 77.5319 200 75.6213 200 71.4817C200 66.1037 198.426 62.5832 194.87 59.965C192.994 58.5851 189.969 58.4436 187.227 59.5935C186.661 59.8234 186.166 60.018 186.113 60.018C185.883 60.018 186.077 59.6111 186.785 58.5497C187.546 57.4175 187.67 57.1698 188.218 55.5069C188.572 54.4101 188.589 52.5702 188.253 51.438C187.687 49.5982 185.989 47.4045 183.831 45.7416C182.61 44.8217 181.92 44.5032 179.443 43.7425C177.002 42.9818 173.782 42.8403 171.624 43.3887ZM165.202 73.2684C165.273 73.5869 165.043 73.9938 164.778 73.9938C164.548 73.9938 164.442 73.4099 164.636 73.18C164.919 72.8438 165.096 72.8792 165.202 73.2684ZM166.741 75.7628C166.741 75.8513 166.618 75.8867 166.476 75.8336C166.334 75.7628 166.211 75.6921 166.211 75.6567C166.211 75.6213 166.334 75.5859 166.476 75.5859C166.618 75.5859 166.741 75.6567 166.741 75.7628Z"
        stroke="#00501E"
        strokeWidth="4"
        strokeDasharray={500}
        strokeDashoffset={path3.to((x) => (1 - x) * 500)}
        mask="url(#path-1-inside-1_1_99)"
      />
    </svg>
  );
};
export default LucksSvg;