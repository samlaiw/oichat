<template>
  <section class="privacy">
      <h3 class="title">隱私權保護政策</h3>
      <div class="description">為了讓您能夠安心使用本網站的各項服務與資訊，並保障您的隱私權權益，請您詳閱下列內容：</div>
      <div class="list">
          <div class="subtitle">一、隱私權保護政策的適用範圍</div>
          <div class="description">隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</div>
      </div>
      <div class="list">
          <div class="subtitle">二、個人資料的蒐集、處理及利用方式</div>
          <div class="description">當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。</div>
          <div class="description">本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</div>
          <div class="description">於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。</div>
          <div class="description">為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。</div>
      </div>
      <div class="list">
          <div class="subtitle">三、資料之保護</div>
          <div class="description">只由經過授權的人員才能接觸您的個人資料，如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</div>
      </div>
      <div class="list">
          <div class="subtitle">四、網站對外的相關連結</div>
          <div class="description">本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</div>
      </div>
      <div class="list">
          <div class="subtitle">五、與第三人共用個人資料之政策</div>
          <div class="description">本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</div>
          <div class="description">前項但書之情形包括不限於：</div>
          <div class="description">經由您書面同意。</div>
          <div class="description">法律明文規定。</div>
          <div class="description">為免除您生命、身體、自由或財產上之危險。</div>
          <div class="description">與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。</div>
          <div class="description">當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</div>
          <div class="description">有利於您的權益。</div>
          <div class="description">本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</div>
      </div>
      <div class="list">
          <div class="subtitle">六、Cookie之使用</div>
          <div class="description">為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行 。</div>
      </div>
      <div class="list">
          <div class="subtitle">七、隱私權保護政策之修正</div>
          <div class="description">本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</div>
      </div>
  </section>
</template>

<script>
	export default {
		components: {

		}
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';
    
    .privacy {
        max-width: 864px;
        margin: auto;
        padding: 50px 0px;
        text-align: center;
        font-weight: bold;

        @media screen and (max-width: 864px) {
            padding-right: 10px;
            padding-left: 10px;
        }
        

        .title {
            font-size: 40px;
            margin-bottom: 50px;

            @media screen and (max-width: 864px) {
                text-align: left;
                margin-bottom: 20px;
            }
        }

        .description {
            text-align: left;
            margin-bottom: 30px;
        }

        .list {
            text-align: left;
            margin-bottom: 20px;

            .subtitle {
                color: $minor_color;
                margin-bottom: 5px;
            }

            .description {
                margin-bottom: 10px;
            }
        }
    }
</style>
