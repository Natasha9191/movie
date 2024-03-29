!(function (global, jQuery) {
  var $ = jQuery;
  global.aiss || (global.aiss = {});
  var tr = window.translation =  global.aiss.i18n = {
    langs: {
        "en": {
          "launcher_step_1":["Step","Please"," "," first."],
          "launcher_step_2":["Step","Install","","after downloading."],
          "launcher_submit":"Submit",
          "launcher_no_file":"No File Selected!",
          "launcher_video_format":"Video Format",
          "launcher_audio_format":"Audio Format",
          "launcher_install_guide":"Install",
          "launcher_feedback":"Feedback",
          "launcher_retry":"Retry",
          "launcher_download":"download",
          "launcher_error_1010":"This service is not supported by the current browser or version (error code: 1010). Please upgrade your browser or try a different browser.",
          "system_support":"This online service is only available on the computer. Please use desktop browser to access.",
          "launching_agent":"Launching…",
          "launcher_error_1011":"Communication is abnormally down (error code: 1011). Click Retry to try again, or you can send us feedback to solve the problem.",
          "service_activated":"Service activated!",
          "service_closed":"Service is closed!",
          "launcher_proccess":"Updating...",
          "launcher_error_1001":"An exception occurred during environment configuration (error code: 1001). Please refresh the page to try again, or give us feedback to resolve the issue.",
          "launcher_error_1002":"An exception occurred during environment configuration (error code: 1002). Please refresh the page to try again, or give us feedback to resolve the issue.",
          "launcher_error_1003":"Unstable network connection (error code: 1003). Click Retry to try again, or you can send us feedback to solve the problem.",
          "launcher_error_1000":"An exception occurred during environment configuration (error code: 1000). Please refresh the page to try again, or give us feedback to resolve the issue.",
          "launcher_error_1004":"Configuration failed (error code: 1004). Click Retry to reconfigure, or you can send us feedback to solve the problem.",
          "launcher_updated":["The service is updated, please click Update Now to download and install.","Update Now"],
          "launcher_launching":"Launching service...",
          "launcher_error_1012":"The main process service failed to load (error code: 1012). Click Retry to reload, or you can send us feedback to solve the problem.",
          "launcher_error_1005":"An exception occurred during environment configuration (error code: 1005). Please refresh the page to try again, or give us feedback to resolve the issue.",
          "launcher_error_1007":"An exception occurred during environment configuration (error code: 1007). Please refresh the page to try again, or give us feedback to resolve the issue.",
          "launcher_error_1006":"An exception occurred during environment configuration (error code: 1006). Please refresh the page to try again, or give us feedback to resolve the issue.",
          "launcher_error_1008":"An exception occurred during environment configuration (error code: 1008). Please refresh the page to try again, or give us feedback to resolve the issue.",
          "feedback_zoon":["Thanks for your feedback. Please leave your problem and we will respond to you within 24 hours.","Email:","Enter your email here!","Contents:","Leave any problem or suggestion you encountered here.","Thank You!","Your Feedback has been submitted successfully.","Start Recording","Leave Your Comment"],
          "launcher_feedbacktip":"Enter your email here!",
          "screen_recorder_feedback":["Email is empty!","Please enter a valid email!","Please Enter Content!"],
          "video_converter_general_info":"General Info",
          "video_converter_name_info":"Name:",
          "video_converter_format_info":"Format:",
          "video_converter_size_info":"Size:",
          "video_converter_duration_info":"Duration:",
          "video_converter_video_stream_info":"Video Stream",
          "video_converter_encoder_info":"Encoder:",
          "video_converter_video_bitrate_info":"Video Bitrate:",
          "video_converter_resolution_info":"Resolution:",
          "video_converter_frame_rate_info":"Frame Rate:",
          "video_converter_audio_stream_info":"Audio Stream",
          "video_converter_encoder_info":"Encoder:",
          "video_converter_sample_rate_info":"Sample Rate:",
          "video_converter_channel_info":"Channel:",
          "video_converter_audio_bitrate_info":"Audio Bitrate:",
          "video_converter_video_settings":"Video Settings",
          "video_converter_audio_settings":"Audio Settings",
          "video_converter_audio_encoder_settings":"Audio Encoder:",
          "video_converter_video_encoder_settings":"Video Encoder:",
          "video_converter_bitrate_settings":"Bitrate:",
          "video_converter_default_settings":"Default",
          "video_converter_cancel_settings":"Cancel",
          "video_compressor_exit":"Are you sure you want to exit Video Compress?",
          "video_joiner_exit":"Are you sure you want to exit Video merger?",
          "video_compressor_add":"Add Files to Compress",
          "video_compressor_change_file":"Change Source File",
          "video_compressor_successfully":"Compression successfully!",
          "video_compressor_failed":"Compression failed, please retry!",
          "video_compressor_file_error":"File Error!",
          "video_compressor_yes":"Yes",
          "video_compressor_no":"No",
          "video_compressor_replace":"Are you sure you want to replace current video to compress other?",
          "video_compressor_stop_compress":"Are you sure you want to stop compress progress?",
          "video_compressor_stop":"Stop",
          "video_joiner_stop":"Are you sure you want to stop merging?",
          "video_compressor_compress":"Compress",
          "video_compressor_compressing":"Compressing",
          "video_compressor_reload":"The file you uploaded is corrupted. Please select another one file for upload.",
          "video_compressor_desktop_download":"Install Desktop Version",
          "video_joiner_merging":"Merging videos",
          "video_joiner_merge":"Merge Now",
          "video_joiner_join_failed":"Join Failed",
          "video_joiner_join_success":"Join Successfully",
          "video_joiner_insert":"Insert new",
          "video_joiner_to_merge":"Add files to Merge",
          "video_joiner":"Online Video Merger",
          "browser_support_image_compressor":"Your browser is to old. Please update it to support compress photo.",
          "image_compressor_upload":"upload",
          "image_compressor_finished":"Finished",
          "image_compressor_error":"Error!",
          "image_compressor_max-size":"Size large than 5 MB",
          "image_compressor_max_number":"You only only upload 40 images today.",
          "pdf_compressor_max_number":"You can only add up to 10 files today.",
          "image_compressor_failed":"Fail",
          "heic_converter_max_size":"You can only add up to 5 MB per file.",
          "image_compressor_download":"Download",
          "image_compressor_converting":"Converting",
          "image_compressor_delete":"Delete",
          "pdf_compressor_refreshing":"There may be an error,try refreshing?",
          "pdf_compressor_try_again":"Error! Please refresh page and try again.",
          "pdf_compressor_updata_error":"Upload process error",
          "pdf_compressor_over_size":"File size too big",
          "pdf_compressor__not_allowed":"This extension is not allowed",
          "pdf_compressor_one_only":"Can only upload one",
          "browser_support_pdf_compressor":"Your browser is to old. Please update it to support compress PDF Files.",
          'over_size_message': 'The image you uploaded is over 10M. We will compress your file for uploading. Please click “Confirm” to continue uploading.',
          'file_type_error': 'The file you uploaded is not an image! Please try to upload again.',
          'image_type_error': 'The image format is not supported. We only supports JPG, JPEG, PNG and GIF. We will covert your image format for recognition. Please click “Confirm” to continue uploading.',
          'upload_error': 'Upload Error! (Error Code: 2000) Please try again.',
          'network_error': 'Network Error! (Error Code: 2001) Please try again.',
          'recognition_error': 'Recognition Error! (Error Code: 2002) Please try again.',
          'image_compress_fail': 'The image is too large to compress!',
          'image_transfer_fail': 'Failed to convert the image. Please upload another one.'  ,
          'image_size': 'We currently do not support images whose width or height is more than 3000px. Please choose another image and try again.',
          'original_image': 'Original',
          'preview_image': 'Preview',
        },
        "jp": {
          "launcher_step_1":["Step","まず"," ","をダウンロードしてください。"],
          "launcher_step_2":["Step","","","をダウンロードしたらインストールします。"],
          "launcher_submit":"提出",
          "launcher_no_file":"ファイルは検出されません",
          "launcher_video_format":"動画形式",
          "launcher_audio_format":"音声形式",
          "launcher_install_guide":"インストール",
          "launcher_feedback":"フィードバック",
          "launcher_retry":"再試行",
          "launcher_download":"ダウンロード",
          "launcher_error_1010":"サービスは現在のブラウザまたはバージョンではサポートされていません (エラーコード: 1010). ブラウザをアップグレードするか、別のブラウザをお試しください。",
          "system_support":"このオンラインサービスは、コンピューターしか利用できません。 デスクトップブラウザを使用してアクセスしてください。",
          "launching_agent":"ロード中…",
          "launcher_error_1011":"通信が異常停止しました (エラーコード: 1011)。再試行するか、フィードバックを送信して問題を解決してください。",
          "service_activated":"サービスが有効になりました！",
          "service_closed":"サービスは停止されています！",
          "launcher_proccess":"アップデート...",
          "launcher_error_1001":"環境設定にエラーが発生しました (エラーコード: 1001)。ページを更新して再試行するか、フィードバックを送信して問題を解決してください。",
          "launcher_error_1002":["環境設定にエラーが発生しました (エラーコード: 1002)。ページを更新して再試行するか、フィードバックを送信して問題を解決してください。","フィードバック"],
          "launcher_error_1003":"ネットワーク接続エラー (エラーコード: 1003)。再試行するか、フィードバックを送信して問題を解決してください。",
          "launcher_error_1000":"環境設定にエラーが発生しました (エラーコード: 1000)。ページを更新して再試行するか、フィードバックを送信して問題を解決してください。",
          "launcher_error_1004":"設定に失敗しました (エラーコード: 1004)。「再試行」をクリックして再構成するか、フィードバックを送信して問題を解決できます。",
          "launcher_updated":["サービスが更新されました。「すぐ更新」をクリックしてダウンロードしてインストールしてください。","すぐ更新"],
          "launcher_launching":"サービスロード中...",
          "launcher_error_1012":"メインプロセスサービスをロードできません (エラーコード: 1012)。「再試行」をクリックしてロードするか、フィードバックを送信して問題を解決できます。",
          "launcher_error_1005":"環境設定にエラーが発生しました (エラーコード: 1005)。ページを更新して再試行するか、フィードバックを送信して問題を解決してください。",
          "launcher_error_1007":"環境設定にエラーが発生しました (エラーコード: 1007)。ページを更新して再試行するか、フィードバックを送信して問題を解決してください。",
          "launcher_error_1006":"環境設定にエラーが発生しました (エラーコード: 1006)。ページを更新して再試行するか、フィードバックを送信して問題を解決してください。",
          "launcher_error_1008":"環境設定にエラーが発生しました(エラーコード: 1008)。ページを更新して再試行するか、フィードバックを送信して問題を解決してください。",
          "feedback_zoon":["お問い合わせいただきまして、誠にありがとう御座います。 お送りいただきました内容を確認させて頂き、ご連絡を致しますので、もうしばらくお待ち下さいませ。","メールアドレス:","ご利用のメールアドレスを入力してください。","ご意見・ご感想:","製品へのご意見・ご感想をここに書いていただけると助かります。","ありがとうございます。","フィードバックは正常に送信されました。","録画スタート","意見をいただけましょうか"],
          "launcher_feedbacktip":"メールを入力してください!",
          "screen_recorder_feedback":["無効なメールです!","有効なメールを入力してください!","コンテンツを入力してください!"],
          "video_converter_general_info":"詳細情報",
          "video_converter_name_info":"ファイル名:",
          "video_converter_format_info":"フォーマット:",
          "video_converter_size_info":"サイズ:",
          "video_converter_duration_info":"再生時間:",
          "video_converter_video_stream_info":"動画情報",
          "video_converter_encoder_info":"エンコーダー:",
          "video_converter_video_bitrate_info":"動画ビットレート:",
          "video_converter_resolution_info":"解像度:",
          "video_converter_frame_rate_info":"フレームレート:",
          "video_converter_audio_stream_info":"音声情報",
          "video_converter_encoder_info":"エンコーダー:",
          "video_converter_sample_rate_info":"サンプリングレート:",
          "video_converter_channel_info":"チャンネル:",
          "video_converter_audio_bitrate_info":"音声ビットレート:",
          "video_converter_video_settings":"動画設定",
          "video_converter_audio_settings":"音声設定",
          "video_converter_audio_encoder_settings":"音声エンコーダー:",
          "video_converter_video_encoder_settings":"動画エンコーダー:",
          "video_converter_bitrate_settings":"ビットレート:",
          "video_converter_default_settings":"デフォルト",
          "video_converter_cancel_settings":"取り消し",
          "video_compressor_exit":"動画圧縮から退出しますか?",
          "video_joiner_exit":"Are you sure you want to exit Video merger?",
          "video_compressor_add":"プログラムにファイルを追加します",
          "video_compressor_change_file":"ソースファイルを変更します",
          "video_compressor_successfully":"圧縮しました",
          "video_compressor_failed":"圧縮に失敗しました",
          "video_compressor_file_error":"ファイルエラー",
          "video_compressor_yes":"はい",
          "video_compressor_no":"いいえ",
          "video_compressor_replace":"今の動画ファイルを置き換えますか?",
          "video_compressor_stop_compress":"圧縮プロせースを停止してもよろしいですか?",
          "video_compressor_stop":"停止",
          "video_joiner_stop":"Are you sure you want to stop merging?",
          "video_compressor_compress":"圧縮する",
          "video_compressor_compressing":"圧縮中",
          "video_compressor_reload":"アップロードしたファイルが破損しています。 別のファイルを選択してください。",
          "video_compressor_desktop_download":"ディスクトップ版をインストール",
          "video_joiner_merging":"ファイルを結合中",
          "video_joiner_merge":"すぐ結合",
          "video_joiner_join_failed":"結合に失敗しました",
          "video_joiner_join_success":"成功に結合しました",
          "video_joiner_insert":"すぐ挿入",
          "video_joiner_to_merge":"ファイルを追加",
          "video_joiner":"オンライン 動画結合",
          "browser_support_image_compressor":"ブラウザバージョンは低く、写真を圧縮するためにアップデートしてください。",
          "image_compressor_upload":"アップデート",
          "image_compressor_finished":"完了",
          "image_compressor_error":"エラー!",
          "image_compressor_max-size":"5 MBを超えました",
          "image_compressor_max_number":"今日最大40写真だけサポートします。",
          "pdf_compressor_max_number":"今日10写真だけ追加できます。",
          "image_compressor_failed":"失敗",
          "heic_converter_max_size":"ファイルごとに最大5 MBまで追加できます。",
          "image_compressor_download":"ダウンロード",
          "image_compressor_converting":"変換",
          "image_compressor_delete":"削除",
          "pdf_compressor_refreshing":"不明エラーです。再試行しましょうか?",
          "pdf_compressor_try_again":"エラー！ ページを更新してもう一度お試しください。",
          "pdf_compressor_updata_error":"アップロードプロセスエラー",
          "pdf_compressor_over_size":"ファイルサイズが大きすぎます",
          "pdf_compressor__not_allowed":"この拡張子はサポートされていません",
          "pdf_compressor_one_only":"1つのみアップロードできます",
          "browser_support_pdf_compressor":"お使いのブラウザバージョンは低いです。 PDFファイルの圧縮をサポートするように更新してください。",
          'over_size_message': '画像のサイズは10Mを超えましたので、こちらは自動的にファイルを圧縮して再度ロードします。「確認」をタップして続けます',
          'file_type_error': 'ロードするファイルは画像ではありません!もう一度ロードしてください',
          'image_type_error': 'サポートしていない画像形式です。JPG；JPEG；PNG；GIFだけに対応しますので、この画像を自動的に形式変換します。「確認」をタップして続けます',
          'upload_error': 'ロードにエラーは起こします(エラーコード: 2000)、再試行してください……',
          'network_error': 'ネットワークエラーです(エラーコード: 2001)、再試行してください……',
          'recognition_error': '認識エラーです(エラーコード: 2002)、再試行してください……',
          'image_compress_fail': '画像のサイズが多すぎて、圧縮に失敗しました',
          'image_transfer_fail': '画像形式を変換に失敗しました。画像を変換しましょう'   ,
          'image_size': '幅または高さが3000pxを超える画像はサポートされていません。 別の画像を選択して、もう一度お試しください。',
          'original_image': 'オリジナル',
          'preview_image': 'プレビュー',
        },
        "fr": {
          "launcher_step_1":["Étape","Veuillez d'abord","","."],
          "launcher_step_2":["Étape","Installez","","après téléchargement"],
          "launcher_submit":"Soumettre",
          "launcher_no_file":"Aucun fichier sélectionné!",
          "launcher_video_format":"Format Vidéo",
          "launcher_audio_format":"Format Audio",
          "launcher_install_guide":"Installez",
          "launcher_feedback":"Commentaire",
          "launcher_retry":"Réessayer",
          "launcher_download":"Télécharger",
          "launcher_error_1010":"Ce service n\'est pas pris en charge par le navigateur ou la version actuelle (code d\'erreur: 1010). Veuillez mettre à niveau votre navigateur ou essayer un autre navigateur.",
          "system_support":"Ce service en ligne n\'est disponible que sur ordinateur. Veuillez utiliser un navigateur de bureau pour y accéder.",
          "launching_agent":"Lancement…",
          "launcher_error_1011":"La communication est anormalement interrompue (code d\'erreur: 1011). Veullez cliquer sur Réessayer, ou nous envoyer des commentaires pour résoudre le problème.",
          "service_activated":"Le service est activé!",
          "service_closed":"Le service est fermé!",
          "launcher_proccess":"Mise à jour...",
          "launcher_error_1001":"Une exception s\'est produite lors de la configuration de l\'environnement (code d\'erreur: 1001). Veuillez actualiser la page pour réessayer ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_error_1002":"Une exception s\'est produite lors de la configuration de l\'environnement (code d\'erreur: 1002). Veuillez actualiser la page pour réessayer ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_error_1003":"Connexion réseau instable (code d\'erreur: 1003). Veuillez cliquer sur Réessayer, ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_error_1000":"Une exception s\'est produite lors de la configuration de l\'environnement (code d\'erreur: 1000). Veuillez actualiser la page pour réessayer ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_error_1004":"Échec de la configuration (code d\'erreur: 1004). Veuillez cliquer sur Réessayer, ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_updated":["Le service est mis à jour, veuillez cliquer sur Mettre à jour pour le télécharger et installer.","Mettre à jour"],
          "launcher_launching":"Lancement du service ...",
          "launcher_error_1012":"Échec du chargement du service de processus principal (code d\'erreur: 1012). Cliquez sur Réessayer, ou nous envoyer des commentaires pour résoudre le problème.",
          "launcher_error_1005":"Une exception s\'est produite lors de la configuration de l\'environnement (code d\'erreur: 1005). Veuillez actualiser la page pour réessayer ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_error_1007":"Une exception s\'est produite lors de la configuration de l\'environnement (code d\'erreur: 1007). Veuillez actualiser la page pour réessayer ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_error_1006":"Une exception s\'est produite lors de la configuration de l\'environnement (code d\'erreur: 1006). Veuillez actualiser la page pour réessayer ou nous envoyer vos commentaires pour résoudre le problème.",
          "launcher_error_1008":"Une exception s\'est produite lors de la configuration de l\'environnement (code d\'erreur: 1008). Veuillez actualiser la page pour réessayer ou nous envoyer vos commentaires pour résoudre le problème.",
          "feedback_zoon":["Merci pour vos commentaires. Veuillez entrer votre problème et nous vous répondrons dans les 24 heures.","E-mail:","Entrez votre e-mail ici!","Contenu:","Laissez ici votre problème ou suggestion que vous avez rencontré.","Merci!","Vos commentaires ont été soumis avec succès.","Commencer l\'enregistrement","Laissez vos commentaires"],
          "launcher_feedbacktip":"Entrez votre e-mail ici!",
          "screen_recorder_feedback":["L\'e-mail est invalide!","Veuillez entrer un e-mail valide!","Veuillez entrer le contenu!"],
          "video_converter_general_info":"Info Générale",
          "video_converter_name_info":"Nom:",
          "video_converter_format_info":"Format:",
          "video_converter_size_info":"Taille:",
          "video_converter_duration_info":"Durée:",
          "video_converter_video_stream_info":"Vidéo",
          "video_converter_encoder_info":"Encodeur:",
          "video_converter_video_bitrate_info":"Bitrate Vidéo:",
          "video_converter_resolution_info":"Résolution:",
          "video_converter_frame_rate_info":"Cadence de Diffusion:",
          "video_converter_audio_stream_info":"Audio",
          "video_converter_encoder_info":"Encodeur:",
          "video_converter_sample_rate_info":"Taux d\'Échantillonnage:",
          "video_converter_channel_info":"Canal:",
          "video_converter_audio_bitrate_info":"Bitrate Audio:",
          "video_converter_video_settings":"Paramètres Vidéo",
          "video_converter_audio_settings":"Paramètres Audio",
          "video_converter_audio_encoder_settings":"Encodeur Audio:",
          "video_converter_video_encoder_settings":"Encodeur Vidéo:",
          "video_converter_bitrate_settings":"Bitrate Audio:",
          "video_converter_default_settings":"Par défaut",
          "video_converter_cancel_settings":"Annuler",
          "video_compressor_exit":"Êtes-vous sûr de quitter Compresseur Vidéo?",
          "video_joiner_exit":"Are you sure you want to exit Video merger?",
          "video_compressor_add":"Ajouter Fichier(s) à Compresser",
          "video_compressor_change_file":"Changer le fichier source",
          "video_compressor_successfully":"Compression réussie!",
          "video_compressor_failed":"La compression a échoué!",
          "video_compressor_file_error":"Erreur de fichier!",
          "video_compressor_yes":"Oui",
          "video_compressor_no":"Non",
          "video_compressor_replace":"Êtes-vous sûr de remplacer la vidéo actuelle pour compresser d'autres vidéos?",
          "video_compressor_stop_compress":"Êtes-vous sûr d'arrêter le progrès de compression?",
          "video_compressor_stop":"Arrêter",
          "video_joiner_stop":"Are you sure you want to stop merging?",
          "video_compressor_compress":"Compresser",
          "video_compressor_compressing":"Compression",
          "video_compressor_reload":"Le fichier que vous avez chargé est endommagé. Veuillez sélectionner un autre fichier à uploader.",
          "video_compressor_desktop_download":"Installer la Version de Bureau",
          "video_joiner_merging":"Fusionner des vidéos",
          "video_joiner_merge":"Fusionner maintenant",
          "video_joiner_join_failed":"La fusion a échoué",
          "video_joiner_join_success":"Fusionné avec succès",
          "video_joiner_insert":"Insérer un nouveau",
          "video_joiner_to_merge":"Ajouter Fichier(s) à Fusionner",
          "video_joiner":"Fusionneur Vidéo en Ligne Gratuit",
          "browser_support_image_compressor":"Votre navigateur est trop ancien. Veuillez le mettre à jour pour continuer la compression de photo.",
          "image_compressor_upload":"Uploader",
          "image_compressor_finished":"Terminé",
          "image_compressor_error":"Erreur!",
          "image_compressor_max-size":"La taille est supérieure à 5 Mo",
          "image_compressor_max_number":"Vous ne uploadez que 40 images aujourd'hui.",
          "pdf_compressor_max_number":"Vous ne pouvez ajouter que 10 fichiers aujourd'hui.",
          "image_compressor_failed":"Échec",
          "heic_converter_max_size":"Vous ne pouvez ajouter que 5 Mo par fichier.",
          "image_compressor_download":"Télécharger",
          "image_compressor_converting":"Conversion",
          "image_compressor_delete":"Supprimer",
          "pdf_compressor_refreshing":"Il y a peut-être une erreur, essayez d'actualiser la page?",
          "pdf_compressor_try_again":"Erreur! Veuillez actualiser la page et réessayer.",
          "pdf_compressor_updata_error":"Erreur de processus d'upload",
          "pdf_compressor_over_size":"Taille de fichier trop grande",
          "pdf_compressor__not_allowed":"Cette extension n'est pas autorisée",
          "pdf_compressor_one_only":"Ne peut en uploader qu'un",
          "browser_support_pdf_compressor":"Votre navigateur est trop ancien. Veuillez le mettre à jour pour continuer la compression des fichiers PDF.",
          'over_size_message': 'La taille de l\'image que vous avez upploadée dépasse 10 Mo, nous allons compresser votre fichier avant de l\'uploader, cliquez sur "OK" pour continuer',
          'file_type_error': 'Le fichier que vous avez uploadé n\'est pas une image! Veuillez uploader à nouveau',
          'image_type_error': 'Le format d\'image que vous uploadez n\'est pas pris en charge pour le moment. Les formats d\'image pris en charge incluent JPG; JPEG; PNG; GIF. Nous allons faire la conversion de votre fichier avant de l\'uploader. Cliquez sur "OK" pour continuer.',
          'upload_error': 'Erreur d\'upload (code d\'erreur: 2000), veuillez réessayer...',
          'network_error': 'Le réseau est anormal (code d\'erreur: 2001), veuillez réessayer...',
          'recognition_error': 'Erreur de reconnaissance (code d\'erreur: 2002), veuillez réessayer...',
          'image_compress_fail': 'L\'image est trop grande, la compression a échoué',
          'image_transfer_fail': 'La conversion du format d\'image a échoué, veuillez remplacer l\'image',
          'image_size': 'Nous ne prenons actuellement pas en charge les images dont la largeur ou la hauteur est supérieure à 3000px. Veuillez choisir une autre image et réessayer.',
          'original_image': 'Originale',
          'preview_image': 'Aperçu',
        },
        "de": {
          "launcher_step_1":["Schritt","","Sie bitte zuerst den","."],
          "launcher_step_2":["Schritt","Installieren","Sie bitte nach dem Download den",""],
          "launcher_submit":"Senden",
          "launcher_no_file":"Keine Datei ausgewählt!",
          "launcher_video_format":"Video Format",
          "launcher_audio_format":"Audio Format",
          "launcher_install_guide":"Installieren",
          "launcher_feedback":"Wiederholen",
          "launcher_retry":"Réessayer",
          "launcher_download":"Downloaden",
          "launcher_error_1010":"Dieser Dienst wird vom aktuellen Browser oder der aktuellen Version nicht unterstützt (Fehlercode: 1010). Aktualisieren Sie bitte Ihren Browser oder versuchen Sie einen anderen Browser.",
          "system_support":"Dieser Online-Dienst ist nur auf dem Computer verfügbar. Verwenden Sie bitte für den Zugriff einen Desktop-Browser.",
          "launching_agent":"Wird gestartet…",
          "launcher_error_1011":"Kommunikation ist abnormal gestört (Fehlercode: 1011). Klicken Sie auf Wiederholen, um es erneut zu versuchen, oder Sie können uns Feedback zur Lösung des Problems senden.",
          "service_activated":"Dienst aktiviert!",
          "service_closed":"Dienst deaktiviert!",
          "launcher_proccess":"Wird aktualisiert...",
          "launcher_error_1001":"Während der Umgebungskonfiguration ist eine Ausnahme aufgetreten (Fehlercode: 1001). Aktualisieren Sie bitte die Seite, um es erneut zu versuchen, oder geben Sie uns Feedback, um das Problem zu lösen.",
          "launcher_error_1002":"Während der Umgebungskonfiguration ist eine Ausnahme aufgetreten (Fehlercode: 1002). Aktualisieren Sie bitte die Seite, um es erneut zu versuchen, oder geben Sie uns Feedback, um das Problem zu lösen.",
          "launcher_error_1003":"Instabile Netzwerkverbindung (Fehlercode: 1003). Klicken Sie auf Wiederholen, um es erneut zu versuchen, oder Sie können uns Feedback zur Lösung des Problems senden.",
          "launcher_error_1000":"Während der Umgebungskonfiguration ist eine Ausnahme aufgetreten (Fehlercode: 1000). Aktualisieren Sie bitte die Seite, um es erneut zu versuchen, oder geben Sie uns Feedback, um das Problem zu lösen.",
          "launcher_error_1004":"Konfiguration fehlgeschlagen (Fehlercode: 1004). Klicken Sie auf Wiederholen, um es erneut zu konfigurieren, oder senden Sie uns Feedback, um das Problem zu lösen.",
          "launcher_updated":["Der Dienst ist aktualisiert, klicken Sie bitte auf Jetzt aktualisieren, um ihn herunterzuladen und zu installieren.","Jetzt aktualisieren"],
          "launcher_launching":"Dienst wird gestartet...",
          "launcher_error_1012":"Der Hauptprozessdienst konnte nicht geladen werden (Fehlercode: 1012). Klicken Sie auf Wiederholen, um erneut zu laden, oder senden Sie uns eine Rückmeldung, um das Problem zu lösen.",
          "launcher_error_1005":"Während der Umgebungskonfiguration ist eine Ausnahme aufgetreten (Fehlercode: 1005). Aktualisieren Sie bitte die Seite, um es erneut zu versuchen, oder geben Sie uns Feedback, um das Problem zu lösen.",
          "launcher_error_1007":"Während der Umgebungskonfiguration ist eine Ausnahme aufgetreten (Fehlercode: 1007). Aktualisieren Sie bitte die Seite, um es erneut zu versuchen, oder geben Sie uns Feedback, um das Problem zu lösen.",
          "launcher_error_1006":"Während der Umgebungskonfiguration ist eine Ausnahme aufgetreten (Fehlercode: 1006). Aktualisieren Sie bitte die Seite, um es erneut zu versuchen, oder geben Sie uns Feedback, um das Problem zu lösen.",
          "launcher_error_1008":"Während der Umgebungskonfiguration ist eine Ausnahme aufgetreten (Fehlercode: 1008). Aktualisieren Sie bitte die Seite, um es erneut zu versuchen, oder geben Sie uns Feedback, um das Problem zu lösen.",
          "feedback_zoon":["Vielen Dank für Ihr Feedback. Senden Sie uns bitte Ihr Problem und wir werden Sie innerhalb von 24 Stunden antworten.","Email:","Geben Sie bitte hier Ihre E-Mail-Adresse ein!","Contents:","Geben Sie bitte hier Ihre Probleme oder Vorschläge ein!","Vielen Dank!","Ihr Feedback wurde erfolgreich gesendet.","Aufnahme starten","Ihre Kommentare schreiben"],
          "launcher_feedbacktip":"Geben Sie bitte hier Ihre E-Mail-Adresse ein!",
          "screen_recorder_feedback":["Keine E-Mail-Adresse!","Geben Sie bitte eine gültige E-Mail-Adresse ein!","Geben Sie bitte den Inhalt ein!"],
          "video_converter_general_info":"Allgemeine Informationen",
          "video_converter_name_info":"Name:",
          "video_converter_format_info":"Format:",
          "video_converter_size_info":"Größe:",
          "video_converter_duration_info":"Dauer:",
          "video_converter_video_stream_info":"Video-Stream",
          "video_converter_encoder_info":"Encoder:",
          "video_converter_video_bitrate_info":"Video-Bitrate:",
          "video_converter_resolution_info":"Auflösung:",
          "video_converter_frame_rate_info":"Bildfrequenz:",
          "video_converter_audio_stream_info":"Audio-Stream",
          "video_converter_encoder_info":"Encoder:",
          "video_converter_sample_rate_info":"btastrate:",
          "video_converter_channel_info":"Kanal:",
          "video_converter_audio_bitrate_info":"Audio-Bitrate:",
          "video_converter_video_settings":"Video-Einstellungen",
          "video_converter_audio_settings":"Audio-Einstellungen",
          "video_converter_audio_encoder_settings":"Encoder:",
          "video_converter_video_encoder_settings":"Video Encoder:",
          "video_converter_bitrate_settings":"Bitrate:",
          "video_converter_default_settings":"Default",
          "video_converter_cancel_settings":"Stornieren",
          "video_compressor_exit":"Möchten Sie den Video Compressor beenden?",
          "video_joiner_exit":"Are you sure you want to exit Video merger?",
          "video_compressor_add":"Dateien hinzufügen",
          "video_compressor_change_file":"Originale Datei ändern",
          "video_compressor_successfully":"Komprimierung abgeschlossen!",
          "video_compressor_failed":"Komprimierung fehlgeschlagen!",
          "video_compressor_file_error":"Fehler mit der Datei!",
          "video_compressor_yes":"Ja",
          "video_compressor_no":"Nein",
          "video_compressor_replace":"Möchten Sie das aktuelle Video von einem anderen ersetzen?",
          "video_compressor_stop_compress":"Möchten Sie den Komprimierungsvorgang beenden?",
          "video_compressor_stop":"Arrêter",
          "video_joiner_stop":"Are you sure you want to stop merging?",
          "video_compressor_compress":"Komprimieren",
          "video_compressor_compressing":"Wird komprimiert",
          "video_compressor_reload":"Die hinzugefügte Datei ist beschädigt. Wählen Sie bitte eine andere.",
          "video_compressor_desktop_download":"Desktop-Version installieren",
          "video_joiner_merging":"Videos werden zusammengefügt",
          "video_joiner_merge":"Jetzt zusammenfügen",
          "video_joiner_join_failed":"Zusammenfügen fehlgeschlagen",
          "video_joiner_join_success":"Zusammenfügen erfolgreich",
          "video_joiner_insert":"Neu einfügen",
          "video_joiner_to_merge":"Dateien hinzufügen",
          "video_joiner":"Online Video Joiner",
          "browser_support_image_compressor":"Ihr Browser ist zu alt. Aktualisieren Sie bitte den Browser, um Ihr Bild zu komprimieren.",
          "image_compressor_upload":"Hochladen",
          "image_compressor_finished":"Abgeschlossen",
          "image_compressor_error":"Fehler!",
          "image_compressor_max-size":"Größe über 5 MB",
          "image_compressor_max_number":"Heute können Sie nur 40 Bilder hochladen",
          "pdf_compressor_max_number":"Heute können Sie maximal von 10 Dateien hinzufügen.",
          "image_compressor_failed":"Fehlgeschlagen",
          "heic_converter_max_size":"Jede Datei sollte nicht über 5 MB sein.",
          "image_compressor_download":"Downloaden",
          "image_compressor_converting":"Wird konvertiert",
          "image_compressor_delete":"Löschen",
          "pdf_compressor_refreshing":"Vielleicht ist ein Fehler aufgetreten, möchten Sie erneut versuchen?",
          "pdf_compressor_try_again":"Fehler! Aktualisieren Sie die Seite und versuchen Sie es bitte erneut.",
          "pdf_compressor_updata_error":"Fehler beim Hochladen",
          "pdf_compressor_over_size":"Dateigröße zu groß",
          "pdf_compressor__not_allowed":"Diese Erweiterung ist nicht erlaubt",
          "pdf_compressor_one_only":"Nur eine Datei kann hochgeladen werden",
          "browser_support_pdf_compressor":"Ihr Browser ist zu alt. Aktualisieren Sie bitte den Browser, um PDF-Dateien zu komprimieren.",
          'over_size_message': 'Wenn die Größe Ihres hochgeladenen Bildes mehr als 10M beträgt, komprimieren wir Ihre Datei und laden sie hoch. Klicken Sie auf "OK", Sie können sie weiterhin hochladen',
          'file_type_error': 'Die von Ihnen hochgeladene Datei ist kein Bild! Bitte erneut hochladen',
          'image_type_error': 'Das Bildformat wird nicht unterstützt. Unterstützte Formate sind JPG, JPEG, PNG, GIF. Wir werden Ihr Bildformat nach der Umwandlung erkennen. Klicken Sie auf "OK", um mit dem Hochladen fortzufahren',
          'upload_error': 'Fehler beim Hochladen (Fehlercode: 2000), versuchen Sie bitte erneut...',
          'network_error': ' Netzwerkfehler (Fehlercode: 2001), versuchen Sie bitte erneut...',
          'recognition_error': 'Fehler beim Erkennen (Fehlercode: 2002), versuchen Sie bitte erneut...',
          'image_compress_fail': 'Datei zu groß, Fehler bei der komprimierung',
          'image_transfer_fail': 'Bildumwandlung fehlgeschlagen, ändern Sie bitte das Bild',
          'image_size': 'Wir unterstützen derzeit keine Bilder, deren Breite oder Höhe mehr als 3000 Pixel beträgt. Bitte wählen Sie ein anderes Bild und versuchen Sie es erneut.',
          'original_image': 'Original',
          'preview_image': 'Vorschau',
        },
        "zh_CN": {
          'over_size_message': '您所上传的图片大小超过10M，我们将会对您的文件进行简单压缩后进行上传处理，点击“确定”可继续上传',
          'file_type_error': '您上传的文件不是图片！请重新上传',
          'image_type_error': '暂不支持您上传的图片格式，我们支持的图片格式有JPG；JPEG；PNG；GIF，我们将对您的图片格式进行转换后识别处理，点击“确定”可继续上传',
          'upload_error': '上传异常（错误码：2000），请重试……',
          'network_error': '网络异常（错误码：2001），请重试……',
          'recognition_error': '识别异常（错误码：2002），请重试……',
          'image_compress_fail': '图片过大，压缩失败',
          'image_transfer_fail': '图片格式转化失败，请更换图片',
          'image_size': '我们暂不支持处理宽或高超过3000px的图片，请重新选择图片上传。',
          'original_image': '原图',
          'preview_image': '预览',
        }
    },
    getCurrentLanguage: function() {
      var str = window.location.href.match(/\/\/(\S*)\//)[1].split("https://www.anyrec.io/")[0].replace("aiseesoft","").replace("apeaksoft","").replace("anymp4","").replace("videoconverter.net","");
      if(str.indexOf("\.fr")>-1&&str.indexOf("free-videoconverter")<0){return "fr"}
      else if(str.indexOf("\.jp")>-1&&str.indexOf("free-videoconverter")<0){return "jp"}
      else if(str.indexOf("\.de")>-1&&str.indexOf("free-videoconverter")<0){return "de"}
      else if(str.indexOf("zh-cn")>-1&&str.indexOf("free-videoconverter")<0){return "zh_CN"}
      else if(str.indexOf("zh-tw")>-1&&str.indexOf("free-videoconverter")<0){return "zh_TW"}
      else if(str.indexOf("tr")>-1&&str.indexOf("free-videoconverter")<0){return "tr"}
      else{return "en"}
    },
    tr: function(msgKey) {
        var curLang = this.getCurrentLanguage();
        if (curLang in this.langs && msgKey in this.langs[curLang]) {
            return this.langs[curLang][msgKey];
        }
        if (msgKey in this.langs['en']) {
            return this.langs['en'][msgKey];
        }
        return msgKey;
    }
  };
})(window || {}, jQuery);