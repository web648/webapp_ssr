<template>
  <!-- 隐私权政策 -->
  <div class="agreementWrapper">
    <!-- <div v-wechat-title="$route.meta.title" /> -->
    <div class="agreement_content_cn">
      <div id="img-content" class="inf_v_zhuc" style="border-bottom:none">
        <h1 style="color:#000">隐私权政策</h1>
        <router-link :to="{ path: '/test'}">路径测试跳转</router-link>
        <div class="tips">
          更新时间：2022年4月27日 &nbsp; &nbsp;
          生效时间：2022年4月27日
        </div>
        <p class="inf_txt">名厨（以下简称“我们”）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，<i>我们依据《中华人民共和国网络安全法》、《信息安全技术 个人信息安全规范》以及其他相关法律法规和技术规范明确了我们收集/使用/对外提供个人信息的原则，进一步阐述了关于您个人信息的相关权利。<i>我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。请在使用我们的产品(或服务)前，务必仔细阅读并透彻理解本政策，在确认充分理解并同意后开始使用相关产品或服务。</i></i></p>
        <p class="inf_txt">名厨：指名厨向用户提供功能使用和服务的产品载体（包括App/网站/小程序）。</p>
        <p class="inf_txt">您使用或在我们更新本政策后（我们会及时提示您更新的情况）继续使用我们的产品或服务，即意味着您同意本隐私政策(含更新版本)内容，并且同意我们按照本隐私政策收集、使用、保存和共享您的相关信息。</p>
        <p class="inf_txt">本政策与您使用我们的产品或服务息息相关，<i>还请您特别注意，本政策中与您权益（可能）存在重大关系的条款，已使用加粗字体予以区别，请您重点查阅。<i /></i></p>
        <p class="inf_txt">本政策为名厨的所有产品/服务统一适用的通用内容，当您使用我们的任何产品/服务时，本政策即适用，但如该产品/服务单独设置了隐私条款/隐私协议的，单独的隐私条款/隐私协议优先适用；单独的隐私条款/隐私协议未提及的内容，适用本政策。</p>
        <p class="inf_txt">关于我们<br>
          名厨应用运营方及公司主体：北京早耕田国际广告有限公司<br>
          注册地址：北京市东城区隆福寺街95号、钱粮胡同38号10幢1层GR-101<br>
          联系邮箱：<a href="mailto:nihao@mingchu.co">nihao@mingchu.co</a> ；</p>
        <p class="v_b_tit">涉及到的相关术语及定义：</p>
        <p class="inf_txt">个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。本政策中涉及的个人信息包括：<i>基本信息（包括个人姓名、生日、性别、住址、个人电话号码、电子邮箱）；个人身份信息（包括身份证、护照、其他可证明您真实身份的证件）；网络身份标识信息（包括系统账号、IP地址、邮箱地址及与前述有关的密码）；；个人常用设备信息（包括硬件型号、设备MAC地址、操作系统类型、唯一设备识别码（androidID/IDFA/OAID/UUID)信息在内的描述个人常用设备基本情况的信息）。请您在向我们提交个人信息之前，充分阅读、了解并同意本政策和任何补充政策。您使用或继续使用我们的产品或服务，即意味着您同意我们按照本政策收集、使用、存储和共享您的相关信息。如对本政策或相关事宜有任何问题，您可通过邮箱 <a href="mailto:nihao@mingchu.co">nihao@mingchu.co</a> 与我们联系。当本指引发生实质变更时，我们会在版本更新后以推送通知、弹窗等形式向您展示变更后的内容。</i></p>
        <p class="v_b_tit">一、 我们如何收集和使用您的个人信息</p>
        <p class="inf_txt">我们会遵循正当、合法、必要的原则，出于本政策所述的以下目的和方式，收集和使用您在使用我们服务过程中主动提供或因使用我们产品/服务而产生的个人信息。由于我们的产品和服务较多，为您提供的内容也不同，因此核心业务功能（包括其收集的您的个人信息类型）也会因产品/服务的内容不同而有所区别，具体以产品/服务实际提供为准。除此之外，随着产品和服务的迭代、拓展、升级等，我们可能会经常推出新的业务功能或重新划分业务功能，并可能需要收集新的个人信息或变更个人信息使用目的或方式。如果某一需要收集您的个人信息的功能或产品/服务未能在本政策中予以说明的，我们会通过更新本政策、启动或浏览界面提示、弹窗、站内信、发送邮件、短信等一种或多种方式另行向您说明该信息收集的目的、内容、使用方式和范围，并为您提供自主选择同意的方式，且在征得您同意后收集。</p>
        <p class="inf_txt">1.实现账号注册/登录与使用</p>
        <p class="inf_txt">1.1 当您在注册账号成为名厨用户时，为完成创建账号，您需提供以下信息：您的姓名、手机号、密码等。<i>（为了满足相应法律法规的网络实名制要求，请您谨慎考虑后提供的个人信息「手机号」），我们将通过发送短信验证码来验证您的身份是否有效。您应知悉，手机号码和验证码匹配结果属于您的个人敏感信息，我们收集该类信息是为了满足相关法律法规的要求，是用以完成注册程序、为您持续稳定提供专属于注册用户的产品/服务，并保护您的账号安全。如您拒绝提供可能导致您无法使用我们的此功能，请您谨慎考虑后再提供。</i>提供上述信息并同意注册协议和本政策后，您可以使用名厨的核心业务功能，包括：浏览名厨平台内的内容、发布评论等。如果您仅需浏览，您无需注册成为我们的用户及提供上述信息。</p>
        <p class="inf_txt">1.2 <i>当您在注册过程中，如果您提供以下额外信息，将有助于我们给您提供更好的服务和体验：工作单位、职位、菜系等。但如果您不提供这些信息，将不会影响使用本服务的基本功能。</i>您提供的上述信息，将在您使用本服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除上述信息。上述信息将存储于中华人民共和国境内。如需跨境传输，我们将会单独征得您的授权同意。</p>
        <p class="inf_txt">2.实现发布作品</p>
        <p class="inf_txt">2.1当您在使用名厨进行发布菜品时，为成功完成发布菜品，您需提供您的菜品照片、视频信息。<i>因此在您使用本服务期间，您可以选择开启系统的相机权限，以便于通过相机拍摄图片、视频来提交信息。我们会收集您上传发布的上述信息，此项功能您可以随时关闭，一旦关闭您将可能无法实现拍摄图片、视频的方式进行信息发布，但不会影响您使用其他功能。</i></p>
        <p class="inf_txt">2.2为了通过选择手机相册里的图片、视频来提交信息，更便捷于您在平台发布相关作品，在创建菜谱、上传作品时，<i>您可以选择开启相册授权。我们会收集您上传发布的上述信息，此项功能您可以随时关闭，一旦关闭您将可能无法从手机相册中选择图片、视频的方式进行信息发布，但不会影响您使用其他功能。</i></p>
        <p class="inf_txt">3.基于位置权限的扩展功能</p>
        <p class="inf_txt">3.1为了更好的为您展示地域相关内容，会询问您是否授权位置信息，如您拒绝授权，将不会影响使用本服务的基本功能。<i>在授权后，我们会收集您的地理位置信息，此项功能您可以随时关闭且不会影响您使用其他功能。</i></p>
        <p class="inf_txt">4.查找通讯录好友功能</p>
        <p class="inf_txt">4.1 当您希望主动发现好友时，在获得您明示同意后，我们会收集您的通讯录信息，用于向您展示通讯录中的好友，您的好友也能看到您使用名厨服务。如果您不希望被找到，<i>此项功能您可以随时关闭且不会影响您使用其他功能。通讯录信息属于个人敏感信息，拒绝提供该信息仅会使您无法使用上述功能，但不影响您正常使用名厨及相关服务的其他功能。</i></p>
        <p class="inf_txt">5.实现推送功能</p>
        <p class="inf_txt">5.1 我们也可能会将在前述过程中收集的手机号码通过短信、电话的方式用作向您提供商业活动等商业性信息的用途，但请您放心，如您不愿接受该商业性信息，您可以通过手机短信中提供的退订方式进行退订，也可以直接与我们联系进行退订。如果您不想接受我们给您发送的商业广告，您可以通过短信提示回复退订或我们提供的其他方式退订或关闭。</p>
        <p class="inf_txt">此外我们也会为了不断改进和优化上述功能来使用您的上述信息。</p>
        <p class="inf_txt">6.保障软件与服务安全正常运行</p>
        <p class="inf_txt">6.1 为满足《中华人民共和国网络安全法》（以下简称“《网络安全法》”）等法律法规的要求和网络安全保障的需要，为您提供安全、可靠的产品与服务，保障系统运行的稳定性和安全性，防止您的账号被盗、个人信息被非法获取，提高您使用我们的产品与/或服务时系统的安全性，我们会根据您在软件安装及使用中的具体操作，接收并记录您所使用的设备相关信息包括<i>设备MAC地址、唯一设备识别码（androidID/IDFA/OAID/UUID）、登录IP地址、设备型号、设备名称、设备标识、浏览器类型和设置、语言设置、操作系统和应用程序版本、接入网络的方式、网络质量数据、移动网络信息（包括运营商名称）、产品版本号、设备所在位置相关信息（包括您授权我们获取的地理位置信息）来判断您的账号风险，并可能会记录一些我们认为有风险的链接（“URL”）和IP地址；</i></p>
        <p class="v_b_tit">二、我们如何使用Cookie 和同类技术</p>
        <p class="inf_txt">Cookie和同类技术是互联网中的通用常用技术。当您使用我们产品或服务时，我们可能会使用相关技术向您的设备发送一个或多个Cookie或匿名标识符，以收集和存储您访问、使用本产品的信息。</p>
        <p class="inf_txt">1、保障产品与服务的安全、高效运转</p>
        <p class="inf_txt">我们可能会认证与保障安全性的Cookie或匿名标识符，是我们确认您是否安全登录服务，或者是否遇到盗用、欺诈等不法行为。这些技术还会帮助我们改进服务效率，提升登录和响应速度。</p>
        <p class="inf_txt">2、帮助您获得更轻松的访问体验</p>
        <p class="inf_txt">使用此类技术可以帮助您省去重复填写个人信息、输入搜索内容的步骤和流程。</p>
        <p class="inf_txt">3、其他声明</p>
        <p class="inf_txt">我们可能会有广告商或其他合作方放置的cookies和web beacon。这些cookies和web beacon可能会收集与您相关的非个人身份信息，以用于分析如何使用该等服务或用于评估广告服务的效果。这些第三方cookies和web beacon收集和使用该等信息，不受本隐私政策约束，而是受相关使用者的隐私政策约束，您可以通过浏览器设置拒绝或管理cookies或web beacon。您可以清除计算机上保存的所有 Cookie，大部分网络浏览器都设有阻止 Cookie 的功能。</p>
        <p class="inf_txt">请您了解，我们不会将Cookie用于本隐私政策所述目的之外的任何其他用途。</p>
        <p class="v_b_tit">三、 收集信息与设备权限调用汇总；</p>
        <p class="inf_txt">3.1 产品功能收集使用您的信息逐项列举</p>
        <ul class="v_list_icon clearfix">
          <li><p class="ova">1 业务功能：注册/登录 <br>
            个人信息类型：个人基本资料<br>
            使用目的 ：协助用户注册成为名厨用户<br>
            收集方式：向用户收集<br>
            个人信息字段：登录账号、密码、手机号码
          </p></li>
          <li><p class="ova">2 业务功能：搜索<br>
            个人信息类型：个人上网记录<br>
            使用目的 ：提供符合用户核心需求的服务内容<br>
            收集方式：自动收集<br>
            个人信息字段：关注记录 、关键字信息
          </p></li>
          <li><p class="ova">3 业务功能：关注<br>
            个人信息类型：个人基本资料<br>
            使用目的 ：展示和推送用户关注用户发布的内容<br>
            收集方式：自动收集<br>
            个人信息字段：关注记录
          </p></li>
          <li><p class="ova">4 业务功能：浏览<br>
            个人信息类型：个人上网记录<br>
            使用目的 ：为用户提供服务内容的展示、浏览、播放<br>
            收集方式：自动收集<br>
            个人信息字段：关注记录
          </p></li>
          <li><p class="ova">5 业务功能：订单<br>
            个人信息类型：个人上网记录<br>
            使用目的 ：查询积分兑换订单信息<br>
            收集方式：向用户收集<br>
            个人信息字段：兑换记录、物流信息（收货人姓名、收货地址、收货人联系电话，同时该订单包括具体订单 号、订单创建时间）
          </p></li>
          <li><p class="ova"> 6 业务功能：积分兑换<br>
            个人信息类型：个人基本资料 、身份信息 、积分存储信息<br>
            使用目的 ：帮助用户完成交易、保障交易安全<br>
            收集方式：向用户收集<br>
            个人信息字段：支付时间及应付积分数额
          </p></li>
          <li><p class="ova"> 7 业务功能：收藏<br>
            个人信息类型：个人上网记录<br>
            使用目的 ：记录分析用户感兴趣的内容<br>
            收集方式：自动收集<br>
            个人信息字段：收藏记录
          </p></li>
        </ul>
        <p class="inf_txt">3.2 可能开启您的设备访问权限的逐项列举</p>
        <p class="inf_txt">您可以在设备的设置功能中选择关闭部分或全部权限。在不同设备中，权限显示方式或关闭方式可能有所不同，具体请参考设备及系统开发方的说明或引导：</p>
        <table border="1" class="table">
          <tr>
            <th width="20%">业务场景</th>
            <th>场景说明</th>
            <th width="25%">访问及使用权限</th>
          </tr>
          <tr>
            <td>浏览</td>
            <td>根据用户所在位置，判断所在地，展示相关内容</td>
            <td>位置权限</td>
          </tr>
          <tr>
            <td>发布</td>
            <td>开启系统的相机/相册权限，用户在创建作品、上传作品时提交信息</td>
            <td>使用照相设备权限<br>
              访问相册权限<br>
              访问外部存储权限<br>
              写外部存储权限
            </td>
          </tr>
          <tr>
            <td>分享</td>
            <td>用户在名厨内分享服务内容到第三方平台如微信、微博、QQ等</td>
            <td>访问外部存储权限<br>
              写外部存储权限</td>
          </tr>
          <tr>
            <td>搜索 </td>
            <td>用户搜索作品时，存储用户的关键词信息、关注记录等提供搜索服务</td>
            <td>本地存储权限</td>
          </tr>
          <tr>
            <td>小窗内容 </td>
            <td>授予名厨悬浮窗的权限，用户在离开内容时，可以在其他窗口悬浮观看相关内容，并可选择横竖屏状态。</td>
            <td>悬浮窗权限<br>
              全局系统设置权限</td>
          </tr>
          <tr>
            <td>查找好友 </td>
            <td>用户在寻找朋友时，读取联系人来寻找可能认识的人与在名厨上可能认识的好友</td>
            <td>读取通讯录权限</td>
          </tr>

        </table>
        <p class="v_b_tit">四、我们如何共享、转让、公开披露您的个人信息</p>

        <p class="inf_txt">4.1 共享</p>
        <p class="inf_txt">保护用户个人信息和隐私是名厨的一项基本原则。除以下情形外，我们不会与任何公司、组织和个人共享您的个人信息：</p>
        <ul class="v_list_icon clearfix">
          <li><p class="ova"> 获得您的明确授权或同意后共享。获得您的明确授权或同意后，我们会与其他方共享您的个人信息。</p></li>
          <li><p class="ova"> 在法定情形下的共享。我们可能会根据法律法规规定、行政或司法机关的要求，对外共享您的个人信息。</p></li>
          <li><p class="ova"> 与我们的关联公司共享。为基于名厨向您提供更好的产品和服务，您的个人信息可能会与我们的关联公司共享。我们只会共享必要的个人信息，且受本政策中声明目的的约束。如果关联公司改变个人信息的使用及处理目的，将再次征求您的授权同意。</p></li>
          <li><p class="ova"> 与授权合作伙伴共享。仅为实现本政策中声明的目的，我们的某些产品或服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。</p></li>
        </ul>
        <p class="inf_txt">我们可能委托授权合作伙伴为您提供某些服务，我们仅会出于本政策声明的合法、正当、必要、特定、明确的目的共享您的信息，授权合作伙伴只能接触到其履行职责所需信息，且不得将此信息用于其他任何目的。如第三方因业务需要，确需超出授权范围使用个人信息的，该第三方将需再次征求您的同意。 目前，我们的授权合作伙伴包括以下类型：</p>
        <p class="inf_txt"><i>4.1.1广告、分析服务类的合作伙伴：</i>对于广告合作伙伴，我们会向其提供有关其广告覆盖面和有效性的信息，例如广告投放后的点击情况、广告受众的覆盖情况等，我们仅向广告合作伙伴提供群体化、匿名化的统计数据，这些数据不会识别到您个人。对于分析数据的伙伴，为了更好的分析用户的使用情况，我们向其提供用户的数量、地区分布、活跃情况等数据，但我们仅会向这些合作伙伴提供不能识别个人身份的统计信息。</p>
        <p class="inf_txt"><i>4.1.2 第三方SDK：</i>为了适配在不同手机设备上使用名厨以及第三方平台服务，实现【您的手机设备身份认证、手机设备安全、接收信息推送、登录第三方平台账号、通过第三方平台分享信息】，【名厨】接入了第三方SDK。您可以选择是否访问这类内容或链接，或是否使用该第三方的产品或服务。但我们对于第三方提供的产品或服务没有控制权。我们无法控制第三方掌握的您的任何个人信息。您在使用第三方产品或服务过程中的信息保护问题，不适用于本政策的管理。本政策也不适用于您自行选择提供给第三方的任何信息。关于第三方SDK收集个人信息类型及目的，详情建议您参考阅读<i>下方名厨接入的第三方SDK情况说明。 </i></p>
        <p class="inf_txt">名厨接入的第三方SDK情况说明：</p>
        <p class="inf_txt">为了保障名厨相关产品/服务的实现与应用安全稳定的运行，我们可能会接入由第三方提供的软件开发包（SDK）实现相关目的（如实现手机设备安全、接收信息推送、登录第三方平台账号、通过第三方平台分享信息以及支付安全等）。我们会对合作方获取信息的软件工具开发包（SDK）尽可能地进行严格的安全评估，以保护你的个人信息安全。所接入的部分第三方 SDK 可能会调用你的设备权限、获取你的相关信息。为了帮助你了解，我们将这些第三方SDK的名称、用途和目的、提供方、收集个人信息类型、可能收集的个人信息字段以及调用的权限、第三方隐私政策链接列出如下：</p>
        <p class="inf_txt">个人常用设备信息：指包括硬件序列号、设备 MAC 地址、软件列表、唯一设备识别码(如 IMEI/android ID/IDFA/OPENUDID/GUID、SIM 卡 IMSI 信息等)等在内的描述个人常用设备基本情况的信息；个人位置信息：包括行踪轨迹、精准定位信息、住宿信息、经纬度等；参考自： GB/T 35273—2020 《信息安全技术 个人信息安全规范》</p>
        <p class="inf_txt"><i>微信开放平台 SDK</i><br>
          用途和目的：用于微信账号登录名厨，帮助用户分享内容至微信<br>
          提供方：深圳市腾讯计算机系统有限公司<br>
          接入方式：嵌入第三方SDK，SDK收集传输个人信息<br>
          收集个人信息类型：个人常用设备信息<br>
          个人信息字段： 设备识别信息<br>
          调用的权限：访问网络、访问网络信息<br>
          第三方隐私政策链接：<a href="https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/RYiYJkLOrQwu0nb8">《微信Open SDK个人信息处理规则》</a>、<a href="https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/ONwPihxKd82RAkIJ">《微信Open SDK个人信息处理说明》</a></p>
        <p class="inf_txt"><i>腾讯 bugly SDK</i> <br>
          用途和目的：收集 App 的崩溃信息<br>
          提供方：深圳市腾讯计算机系统有限公司<br>
          接入方式：嵌入第三方SDK，SDK收集传输个人信息<br>
          收集个人信息类型：个人常用设备信息<br>
          个人信息字段：日志信息（包括：自定义日志、Logcat 日志以及 APP 崩溃堆栈信息）、设备 ID（包括：androidid 以及 idfv）、联网信息、系统名称、系统版本以及国家码。<br>
          调用的权限：访问网络、访问网络信息、访问Wi-Fi状态、<br>
          第三方隐私政策链接： <a href="https://static.bugly.qq.com/bugly-sdk-privacy-statement.pdf">https://static.bugly.qq.com/bugly-sdk-privacy-statement.pdf</a>
        </p>
        <p class="inf_txt"><i>个推 SDK </i><br>
          用途和目的：向用户推送消息<br>
          提供方：浙江每日互动网络科技股份有限公司<br>
          接入方式：嵌入第三方SDK，SDK收集传输个人信息<br>
          收集个人信息类型：个人常用设备信息、个人位置信息<br>
          个人信息字段：设备信息（设备平台、设备厂商及品牌、设备型号及系统版本、设备识别码、设备序列号）、网络信息以及位置相关信息<br>
          调用的权限：读取外置存储卡、写入外部存储卡、访问网络、访问网络信息、震动提醒、获取任务信息<br>
          第三方隐私政策链接：<a href="http://docs.getui.com/privacy">http://docs.getui.com/privacy</a>
        </p>
        <p class="inf_txt"><i>神策 SensorsAnalytics SDK </i><br>
          用途和目的：用户使用效果统计分析<br>
          Sdk 提供方：神策网络科技（北京）有限公司<br>
          接入方式：嵌入第三方SDK，私有化部署，不向第三方传输个人信息<br>
          收集个人信息类型：个人常用设备信息<br>
          个人信息字段：设备信息（ Android ID 、OAID）<br>
          调用的权限：访问网络、访问网络信息<br>
          第三方隐私政策链接：<a href="https://www.sensorsdata.cn/terms/privacy.html"> https://www.sensorsdata.cn/terms/privacy.html</a></p>
        <p class="inf_txt"><i>融云 SDK</i><br>
          用途和目的：提供即时聊天通讯服务<br>
          接入方式：接入方式：嵌入第三方SDK，自动收集设备标识信息（IMEI/android ID/IDFA）<br>
          收集个人信息类型：设备标识信息<br>
          个人信息字段：设备信息（IMEI/android ID/IDFA）<br>
          Sdk 提供方：北京云中融信网络科技有限公司<br>
          第三方隐私政策链接：<a href="https://www.rongcloud.cn/privacy">https://www.rongcloud.cn/privacy</a>
        </p>
        <p class="inf_txt"> <i>MobTech ShareSDK（社会化登录分享组件）</i> <br>
          用途和目的：实现第三方登录、应用分享、短信验证和快捷登录<br>
          接入方式：嵌入第三方SDK，SDK收集传输个人信息<br>
          收集个人信息类型：个人常用设备信息<br>
          个人信息字段：设备信息、网络信息<br>
          数据类型：网络访问，获取wifi状态，读取电话状态，读取蓝牙地址，读取已安装包名列表，读取当前运行应用进程，写入外部存储，获取粗略位置，读取设备运营商，设备标识信息【MAC地址信息、imei、imsi或oaid、Android Id、cpu ID 序列号】<br>
          Sdk提供方：上海游昆信息技术有限公司<br>
          第三方隐私政策链接： <a href="https://www.mob.com/about/policy">https://www.mob.com/about/policy</a>
        </p>
        <p class="inf_txt">我们将审慎评估、监测合作方的安全保障能力，并要求其遵循合作协议的约定，以保护您的个人信息安全。也请您充分知晓，如您在名厨使用这类由第三方提供的服务，您将同意由其直接收集和处理您的个人信息（如以嵌入代码、插件等形式）。前述第三方收集和处理个人信息的行为应遵守其自身的个人信息保护政策，为了最大程度保障您的信息安全，我们建议您在使用任何第三方SDK服务前先行查看其个人信息保护政策。为保障您的合法权益，如您发现这等SDK或其他类似的应用程序存在风险时，建议您立即终止相关操作并及时与我们取得联系。</p>
        <p class="inf_txt">4.1.3 开展内部数据分析和研究，第三方SDK统计服务，改善我们的产品或服务</p>
        <p class="inf_txt">我们收集数据是根据您与我们的互动和您所做出的选择，包括您的隐私设置以及您使用的产品和功能。我们收集的数据可能包括SDK/API/JS代码版本、浏览器、互联网服务提供商、IP地址、平台、时间戳、应用标识符、应用程序版本、应用分发渠道、独立设备标识符、iOS广告标识符（IDFA)、广告主标识符、网卡（MAC）地址、国际移动设备识别码（IMEI）、设备型号、终端制造厂商、终端设备操作系统版本、会话启动/停止时间、语言所在地、时区和网络状态（WiFi等）、硬盘、CPU和电池使用情况等。当我们要将信息用于本策略未载明的其它用途时，会事先征求您的同意。当我们要将基于特定目的收集而来的信息用于其他目的时，会事先征求您的同意。为了您的信息安全，我们已与第三方SDK服务商进行数据安全保密约定，这些公司会严格遵守我们的数据隐私和安全要求。除非得到您的同意，我们不会与其共享您的个人身份信息。</p>
        <p class="inf_txt">4.2 转让</p>
        <p class="inf_txt">我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：</p>
        <ul class="v_list_icon clearfix">
          <li><p class="ova">4.2.1 在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；</p></li>
          <li><p class="ova">4.2.2 在涉及合并、收购或破产清算时，如涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。</p></li>
        </ul>

        <p class="inf_txt">4.3 公开披露</p>
        <p class="inf_txt">我们仅会在以下情况下，公开披露您的个人信息：</p>
        <ul class="v_list_icon clearfix">
          <li>
            <p class="ova">4.3.1、获得您明确同意后；</p>
          </li>
          <li>
            <p class="ova">4.3.2、基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。</p>
          </li>
        </ul>
        <p class="v_b_tit">五、我们如何保护您的个人信息</p>

        <p class="inf_txt">5.1 我们已使用符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取一切合理可行的措施，保护您的个人信息。例如，我们会使用加密技术确保数据的保密性；我们会使用受信赖的保护机制防止数据遭到恶意攻击；我们会部署访问控制机制，确保只有授权人员才可访问个人信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。</p>
        <p class="inf_txt">5.2 我们会采取一切合理可行的措施，确保未收集无关的个人信息。我们只会在达成本政策所述目的所需的期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。</p>

        <p class="inf_txt">5.3 互联网并非绝对安全的环境，而且电子邮件、即时通讯、及与其他我们用户的交流方式并未加密，我们强烈建议您不要通过此类方式发送个人信息。请使用复杂密码，协助我们保证您的账号安全。</p>
        <p class="inf_txt">5.4 互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。如果我们的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。</p>
        <p class="inf_txt">5.5 在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。</p>

        <p class="inf_txt">六、权利</p>
        <p class="inf_txt">按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利：</p>
        <p class="inf_txt">6.1 访问您的个人信息,您有权访问您的个人信息，法律法规规定的例外情况除外。如果您想行使数据访问权，可以通过以下方式自行访问：账户信息——如果您希望访问或编辑您的账户中的个人资料信息、更改您的密码、添加安全信息或关闭您的账户等，您可以使用名厨APP执行此类操作。搜索信息——您可以在名厨APP中找到或清除您的搜索历史记录、查看和修改兴趣以及管理其他数据。如果您无法通过上述方式找到这些个人信息，您可以随时使用我们微信客服：名厨小7（xiao7laile）。我们将在30天内回复您的请求。对于您在使用我们的产品或服务过程中产生的其他个人信息，只要我们不需要过多投入，我们会向您提供。如果您想行使数据访问权，请发送电子邮件至<a href="mailto:nihao@mingchu.co">nihao@mingchu.co</a> 。</p>
        <p class="inf_txt">6.2 更正您的个人信息,当您发现我们处理的关于您的个人信息有错误时，您有权要求我们做出更正。您可以通过“（一）访问您的个人信息”中罗列的方式提出更正申请。如果您无法通过上述方式更正这些个人信息，您可以随时使用我们微信客服：名厨小7（xiao7laile）。我们将在30天内回复您的请求。</p>
        <p class="inf_txt">6.3 删除您的个人信息</p>
        <p class="inf_txt">在以下情形中，您可以向我们提出删除个人信息的请求：</p>
        <ul class="v_list_icon clearfix">
          <li><p class="ova">1、如果我们处理个人信息的行为违反法律法规；</p></li>
          <li><p class="ova">2、如果我们收集、使用您的个人信息，却未征得您的同意；</p></li>
          <li><p class="ova">3、如果我们处理个人信息的行为违反了与您的约定；</p></li>
          <li><p class="ova">4、如果您不再使用我们的产品或服务，或您注销了账号；</p></li>
          <li><p class="ova">5、如果我们不再为您提供产品或服务。</p></li>
        </ul>
        <p class="inf_txt">若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。当您从我们的服务中删除信息后，我们可能不会立即备份系统中删除相应的信息，但会在备份更新时删除这些信息。</p>
        <p class="inf_txt">6.4 改变您授权同意的范围</p>
        <p class="inf_txt">每个业务功能需要一些基本的个人信息才能得以完成（见本政策“第一部分”）。对于额外收集的个人信息的收集和使用，您可以随时给予或收回您的授权同意。您可以通过以下方式自行操作：</p>
        <p class="inf_txt">在系统【设置】中找到【名厨APP】，可看到对应权限的设置，可自由切换授权状态。当您收回同意后，我们将不再处理相应的个人信息。但您收回同意的决定，不会影响此前基于您的授权而开展的个人信息处理。如果您不想接受我们给您发送的推送消息，您随时可通过以下方式取消：在系统【设置】中找到【名厨APP】，可看到对应的通知权限设置，可自由切换授权状态。</p>
        <p class="inf_txt">6.5 个人信息主体注销账户，您可注销此前注册的账户。您可以通过以下方式操作：联系名厨小7官方微信号：xiao7laile，或进入设置-账号管理-注销账号并按照提示进行操作，即可注销您的账号。我们将在收到您的注销请求后15日内完成账号信息的删除以及账户余额退回等工作，在此期间您可以随时取消注销申请。在注销账户之后，我们将停止为您提供产品或服务，并依据您的要求，删除您的个人信息，法律法规另有规定的除外。</p>
        <p class="inf_txt">6.6 个人信息主体获取个人信息副本,您有权获取您的个人信息副本，您可以通过以下方式自行操作：,联系名厨小7官方微信号：xiao7laile。在技术可行的前提下，例如数据接口匹配，我们还可按您的要求，直接将您的个人信息副本传输给您指定的第三方。</p>
        <p class="inf_txt">6.7约束信息系统自动决策,在某些业务功能中，我们可能仅依据信息系统、算法等在内的非人工自动决策机制做出决定。如果这些决定显著影响您的合法权益，您有权要求我们做出解释，我们也将提供适当的救济方式。</p>
        <p class="inf_txt">6.8 响应您的上述请求,为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。在以下情形中，按照法律法规要求，我们将无法响应您的请求：</p>
        <ul class="v_list_icon clearfix">
          <li><p class="ova">1、与国家安全、国防安全有关的；</p></li>
          <li><p class="ova">2、与公共安全、公共卫生、重大公共利益有关的；</p></li>
          <li><p class="ova">3、与犯罪侦查、起诉和审判等有关的；</p></li>
          <li><p class="ova">4、有充分证据表明您存在主观恶意或滥用权利的；</p></li>
          <li><p class="ova">5、响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的。</p></li>
        </ul>
        <p class="v_b_tit">七、我们如何处理儿童的个人信息</p>
        <p class="inf_txt">我们的产品、网站和服务主要面向成人。如果没有父母或监护人的同意，儿童不得创建自己的用户账户。对于经父母同意而收集儿童个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护儿童所必要的情况下使用或公开披露此信息。尽管当地法律和习俗对儿童的定义不同，但我们将不满 14 周岁的任何人均视为儿童。如果我们发现自己在未事先获得可证实的父母同意的情况下收集了儿童的个人信息，则会设法尽快删除相关数据。</p>

        <p class="v_b_tit">八、您的个人信息如何在全球范围转移</p>
        <p class="inf_txt">原则上，我们在中华人民共和国境内收集和产生的个人信息，将存储在中华人民共和国境内。由于我们通过遍布全球的资源和服务器提供产品或服务，这意味着，在获得您的授权同意后，您的个人信息可能会被转移到您使用产品或服务所在国家/地区的境外管辖区，或者受到来自这些管辖区的访问。此类管辖区可能设有不同的数据保护法，甚至未设立相关法律。在此类情况下，我们会确保您的个人信息得到在中华人民共和国境内足够同等的保护。例如，我们会请求您对跨境转移个人信息的同意，或者在跨境数据转移之前实施数据去标识化等安全举措。</p>

        <p class="v_b_tit">九、本隐私权政策如何更新</p>
        <p class="inf_txt"> 我们可能适时会对本隐私权政策进行调整或变更，本隐私权政策的任何更新将以标注更新时间的方式公布在我们网站上，除法律法规或监管规定另有强制性规定外，经调整或变更的内容一经通知或公布后的7日后生效。如您在隐私权政策调整或变更后继续使用我们提供的任一服务或访问我们相关网站的，我们相信这代表您已充分阅读、理解并接受修改后的隐私权政策并受其约束。</p>

        <p class="v_b_tit">十、如何联系我们</p>
        <p class="inf_txt">如果您对本隐私政策有任何疑问、意见或建议，通过以下方式与我们联系：邮箱：【<a href="mailto:nihao@mingchu.co">nihao@mingchu.co</a> 】； 我们设立了个人信息保护专职部门（或个人信息保护专员），您可以通过以下方式与其联系：名厨小7官方微信号：xiao7laile 一般情况下，我们将在15天内回复。</p>

      </div>
    </div>
    <div v-if="language === 'fn'" class="agreement_content_fn">
      <div id="img-content" class="inf_v_zhuc" style="border-bottom:none">
        <h1 style="color:#000">隱私權聲明</h1>
        <div class="tips">
          2018年11月13日
        </div>
        <p class="inf_txt">【名廚】（以下簡稱“我們”）深知個人資訊對您的重要性，並會盡全力保護您的個人資訊安全可靠。我們致力於維持您對我們的信任，恪守以下原則，保護您的個人資訊：權責一致原則、目的明確原則、選擇同意原則、最少夠用原則、確保安全原則、主體參與原則、公開透明原則等。同時，我們承諾，我們將按業界成熟的安全標準，採取相應的安全保護措施來保護您的個人資訊。請在使用我們的產品（或服務）前，仔細閱讀並了解本《隱私權政策》。</p><p class="v_b_tit">一、我們如何收集和使用您的個人資訊</p>
        <p class="inf_txt">個人資訊是指以電子或者其他方式記錄的能夠單獨或者與其他資訊結合識別特定自然人身份或者反映特定自然人活動情況的各種資訊。</p>
        <p class="v_m_tit">我們僅會出於本政策所述的以下目的，收集和使用您的個人資訊：</p>
        <p class="inf_txt">（一）	為您提供產品服務</p>
        <ul class="v_list_icon clearfix">
          <li><p class="ova">1、業務功能一：註冊成為會員,為完成創建賬號，您需提供以下資訊：您的姓名、手機號碼、密碼等。在註冊過程中，如果您提供以下額外資訊，將有助於我們給您提供更好的服務和體驗：工作單位、職位、菜系等。但如果您不提供這些資訊，將不會影響使用本服務的基本功能。您提供的上述資訊，將在您使用本服務期間持續授權我們使用。在您註銷賬號時，我們將停止使用並刪除上述資訊。上述資訊將存儲於中華人民共和國境內。如需跨境傳輸，我們將會單獨征得您的授權同意。</p></li>
          <li><p class="ova">2、業務功能二：發佈作品,為完成發佈作品，您需提供您的作品照片、視頻資訊。因此在您使用本服務期間，需獲取您的相冊訪問權限。</p></li>
          <li><p class="ova">3、業務功能三： 個性化推薦,為了更好的為會員推薦所需內容，會詢問會員是否授權位置資訊，如會員拒絕授權，將不會影響使用本服務的基本功能。</p></li>
        </ul>
        <p class="inf_txt">
          （二）裝置功能使用權限總覽，為完整使用名廚 App 功能，App 將取得裝置存取權，您可以透過設定功能，選擇關閉或開放存取權限。不同裝置關的操作方式不同，請參考裝置和系統的說明指示。請參考 App 功能和對應權限：
          <img style="display:block" src="https://img.mingchu.co/ueditor/php/upload/image/20210616/60c9cffb4fcab.png">
        </p>

        <p class="inf_txt">（三）進行內部數據分析和研究，第三方SDK統計服務，改善我們的產品或服務</p>
        <p class="inf_txt">我們收集數據是根據您與我們的互動和您所做出的選擇，包括您的隱私設置以及您使用的產品和功能。我們收集的數據可能包括SDK/API/JS代碼版本、瀏覽器、網路服務提供商、IP地址、平臺、時間戳、應用標識符、應用程序版本、應用分發渠道、獨立設備標識符、iOS廣告標識符（IDFA)、廣告主標識符、網卡（MAC）地址、國際移動設備識別碼（IMEI）、設備型號、終端制造廠商、終端設備操作系統版本、會話啟動/停止時間、語言所在地、時區和網絡狀態（WiFi等）、硬盤、CPU和電池使用情況等。當我們要將資訊用於本策略未載明的其它用途時，會事先征求您的同意。當我們要將基於特定目的收集而來的資訊用於其他目的時，會事先征求您的同意。</p><p class="inf_txt">為了向您提供一鍵分享服務，我們的產品集成友盟+ U-Share SDK，將收集您的設備標識資訊（如IMEI/android ID/IDFA等）和您需要分享的社交帳戶公開資訊，以便完成一鍵分享服務。為了您的資訊安全，我們已與協力廠商SDK服務商進行數據安全保密約定，這些公司會嚴格遵守我們的數據隱私和安全要求。除非得到您的同意，我們不會與其共亯您的個人身份資訊。為便於您更好地瞭解【友盟+】採集的資料類型及用途，以及何保護您的個人資訊，您可以登入https://www.umeng.com/policy瞭解【友盟+】隱私權政策。</p><p class="v_b_tit">二、我們如何共享、轉讓、公開披露您的個人資訊</p>
        <p class="inf_txt">（一）共享</p>
        <p class="v_m_tit">我們不會向其他任何公司、組織和個人分享您的個人資訊，但以下情況除外：</p>
        <ul class="v_list_icon clearfix"><li><p class="ova">1、在獲取明確同意的情況下共享：獲得您的明確同意後，我們會與其他方共享您的個人資訊。</p></li>
          <li><p class="ova">2、我們可能會根據法律法規規定，或按政府主管部門的強制性要求，對外共享您的個人資訊。</p></li>
          <li><p class="ova">3、與授權合作夥伴共享：僅為實現本隱私權政策中聲明的目的，我們的某些服務將由授權合作夥伴提供。我們可能會與合作夥伴共享您的某些個人資訊，以提供更好的客戶服務和會員體驗。例如，我們聘請來提供第三方數據統計和分析服務的公司可能需要采集和訪問個人數據以進行數據統計和分析。在這種情況下，這些公司 必須遵守我們的數據隱私和安全要求。我們僅會出於合法、正當、必要、特定、明確的目的共享您的個人資訊，並且只會共享提供服務所必要的個人資訊。對我們與之共享個人資訊的公司、組織和個人，我們會與其簽署嚴格的保密協定，要求他們按照我們的說明、本隱私政策以及其他任何相關的保密和安全措施來處理個人資訊。</p></li>
        </ul><p class="inf_txt">（二）轉讓</p>
        <p class="v_m_tit">我們不會將您的個人資訊轉讓給任何公司、組織和個人，但以下情況除外：</p>
        <ul class="v_list_icon clearfix"><li><p class="ova">1、在獲取明確同意的情況下轉讓：獲得您的明確同意後，我們會向其他方轉讓您的個人資訊；</p></li>
          <li><p class="ova">2、在涉及合並、收購或破產清算時，如涉及到個人資訊轉讓，我們會在要求新的持有您個人資訊的公司、組織繼續受此隱私政策的約束，否則我們將要求該公司、組織重新向您征求授權同意。</p></li>
        </ul><p class="inf_txt">（三）公開披露</p>
        <p class="v_m_tit">我們僅會在以下情況下，公開披露您的個人資訊：</p>
        <ul class="v_list_icon clearfix"><li><p class="ova">1、獲得您明確同意後；</p></li>
          <li><p class="ova">2、基於法律的披露：在法律、法律程序、訴訟或政府主管部門強制性要求的情況下，我們可能會公開披露您的個人資訊。</p></li>
        </ul><p class="v_b_tit">三、我們如何保護您的個人資訊</p>
        <p class="inf_txt">（一）我們已使用符合業界標準的安全防護措施保護您提供的個人資訊，防止數據遭到未經授權訪問、公開披露、使用、修改、損壞或丟失。我們會採取一切合理可行的措施，保護您的個人資訊。例如，我們會使用加密技術確保數據的保密性；我們會使用受信賴的保護機制防止數據遭到惡意攻擊；我們會部署訪問控制機制，確保只有授權人員才可訪問個人資訊；以及我們會舉辦安全和隱私保護培訓課程，加強員工對於保護個人資訊重要性的認識。</p>
        <p class="inf_txt">（二）我們會採取一切合理可行的措施，確保未收集無關的個人資訊。我們只會在達成本政策所述目的所需的期限內保留您的個人資訊，除非需要延長保留期或受到法律的允許。</p>
        <p class="inf_txt">（三）網路並非絕對安全的環境，而且電子郵件、即時通訊、及與其他我們會員的交流方式並未加密，我們強烈建議您不要通過此類方式發送個人資訊。請使用復雜密碼，協助我們保證您的賬號安全。</p>
        <p class="inf_txt">（四）網路環境並非百分之百安全，我們將盡力確保或擔保您發送給我們的任何資訊的安全性。如果我們的物理、技術、或管理防護設施遭到破壞，導致資訊被非授權訪問、公開披露、篡改、或毀壞，導致您的合法權益受損，我們將承擔相應的法律責任。</p>
        <p class="inf_txt">（五）在不幸發生個人資訊安全事件後，我們將按照法律法規的要求，及時向您告知：安全事件的基本情況和可能的影響、我們已採取或將要採取的處置措施、您可自主防範和降低風險的建議、對您的補救措施等。我們將及時將事件相關情況以郵件、信函、電話、推送通知等方式告知您，難以逐一告知個人資訊主體時，我們會採取合理、有效的方式發佈公告。同時，我們還將按照監管部門要求，主動上報個人資訊安全事件的處置情況。</p><p class="v_b_tit">四、您的權利</p>
        <p class="v_m_tit">按照中國相關的法律、法規、標準，以及其他國家、地區的通行做法，我們保障您對自己的個人資訊行使以下權利：</p>
        <p class="inf_txt">（一）訪問您的個人資訊,您有權訪問您的個人資訊，法律法規規定的例外情況除外。如果您想行使數據訪問權，可以通過以下方式自行訪問：賬戶資訊——如果您希望訪問或編輯您的賬戶中的個人資料資訊、更改您的密碼、添加安全資訊或關閉您的賬戶等，您可以使用名廚APP執行此類操作。搜索資訊——您可以在名廚APP中找到或清除您的搜索歷史記錄、查看和修改興趣以及管理其他數據。如果您無法通過上述方式找到這些個人資訊，您可以隨時使用我們微信客服：名廚小7（xiao7laile）。我們將在30天內回復您的請求。對於您在使用我們的產品或服務過程中產生的其他個人資訊，只要我們不需要過多投入，我們會向您提供。如果您想行使數據訪問權，請發送電子郵件至<a href="mailto:nihao@mingchu.co">nihao@mingchu.co</a> 。</p>
        <p class="inf_txt">（二）更正您的個人資訊,當您發現我們處理的關於您的個人資訊有錯誤時，您有權要求我們做出更正。您可以通過“（一）訪問您的個人資訊”中羅列的方式提出更正申請。如果您無法通過上述方式更正這些個人資訊，您可以隨時使用我們微信客服：名廚小7（xiao7laile）。我們將在30天內回復您的請求。</p>
        <p class="inf_txt">（三）刪除您的個人資訊</p>
        <p class="v_m_tit">在以下情形中，您可以向我們提出刪除個人資訊的請求：</p>
        <ul class="v_list_icon clearfix"><li><p class="ova">1、如果我們處理個人資訊的行為違反法律法規；</p></li>
          <li><p class="ova">2、如果我們收集、使用您的個人資訊，卻未征得您的同意；</p></li>
          <li><p class="ova">3、如果我們處理個人資訊的行為違反了與您的約定；</p></li>
          <li><p class="ova">4、如果您不再使用我們的產品或服務，或您註銷了賬號；</p></li>
          <li><p class="ova">5、如果我們不再為您提供產品或服務。</p></li>
        </ul><p class="inf_txt">若我們決定響應您的刪除請求，我們還將同時通知從我們獲得您的個人資訊的實體，要求其及時刪除，除非法律法規另有規定，或這些實體獲得您的獨立授權。當您從我們的服務中刪除資訊後，我們可能不會立即備份系統中刪除相應的資訊，但會在備份更新時刪除這些資訊。</p>
        <p class="inf_txt">（四）改變您授權同意的範圍</p>
        <p class="inf_txt">每個業務功能需要一些基本的個人資訊才能得以完成（見本策略“第一部分”）。對於額外收集的個人資訊的收集和使用，您可以隨時給予或收回您的授權同意。您可以通過以下方式自行操作：</p>
        <p class="inf_txt">在系統【設置】中找到【名廚APP】，可看到對應權限的設置，可自由切換授權狀態。當您收回同意後，我們將不再處理相應的個人資訊。但您收回同意的決定，不會影響此前基於您的授權而進行的個人資訊處理。如果您不想接受我們給您發送的推送消息，您隨時可通過以下方式取消：在系統【設置】中找到【名廚APP】，可看到對應的通知權限設置，可自由切換授權狀態。</p>
        <p class="inf_txt">（五）個人資訊主體註銷賬戶 ,您可註銷此前註冊的賬戶，您可以通過以下方式操作：聯系名廚小7官方微信號：xiao7laile。可註銷您的賬號。在註銷賬戶之後，我們將停止為您提供產品或服務，並依據您的要求，刪除您的個人資訊，法律法規另有規定的除外。</p>
        <p class="inf_txt">（六）個人資訊主體獲取個人資訊副本,您有權獲取您的個人資訊副本，您可以通過以下方式自行操作：,聯系名廚小7官方微信號：xiao7laile。在技術可行的前提下，例如數據接口匹配，我們還可按您的要求，直接將您的個人資訊副本傳輸給您指定的第三方。</p>
        <p class="inf_txt">（七）約束資訊系統自動決策，在某些業務功能中，我們可能僅依據資訊系統、算法等在內的非人工自動決策機制做出決定。如果這些決定顯著影響您的合法權益，您有權要求我們做出解釋，我們也將提供適當的救濟方式。</p>
        <p class="inf_txt">（八）響應您的上述請求,為保障安全，您可能需要提供書面請求，或以其他方式證明您的身份。我們可能會先要求您驗證自己的身份，然後再處理您的請求。對於您合理的請求，我們原則上不收取費用，但對多次重復、超出合理限度的請求，我們將視情收取一定成本費用。對於那些無端重復、需要過多技術手段（例如，需要開發新系統或從根本上改變現行慣例）、給他人合法權益帶來風險或者非常不切實際（例如，涉及備份磁帶上存放的資訊）的請求，我們可能會予以拒絕。在以下情形中，按照法律法規要求，我們將無法響應您的請求：</p>
        <ul class="v_list_icon clearfix"><li><p class="ova">1、與國家安全、國防安全有關的；</p></li>
          <li><p class="ova">2、與公共安全、公共衛生、重大公共利益有關的；</p></li>
          <li><p class="ova">3、與犯罪偵查、起訴和審判等有關的；</p></li>
          <li><p class="ova">4、有充分證據表明您存在主觀惡意或濫用權利的；</p></li>
          <li><p class="ova">5、響應您的請求將導致您或其他個人、組織的合法權益受到嚴重損害的。</p></li>
        </ul><p class="v_b_tit">五、我們如何處理兒童的個人資訊</p>
        <p class="inf_txt">我們的產品、網站和服務主要面向成人。如果沒有父母或監護人的同意，兒童不得創建自己的會員賬戶。對於經父母同意而收集兒童個人資訊的情況，我們只會在受到法律允許、父母或監護人明確同意或者保護兒童所必要的情況下使用或公開披露此資訊。盡管當地法律和習俗對兒童的定義不同，但我們將不滿 14 周歲的任何人均視為兒童。如果我們發現自己在未事先獲得可證實的父母同意的情況下收集了兒童的個人資訊，則會設法盡快刪除相關數據。</p><p class="v_b_tit">六、您的個人資訊如何在全球範圍轉移</p>
        <p class="inf_txt">原則上，我們在中華人民共和國境內收集和產生的個人資訊，將存儲在中華人民共和國境內。由於我們通過遍布全球的資源和服務器提供產品或服務，這意味著，在獲得您的授權同意後，您的個人資訊可能會被轉移到您使用產品或服務所在國家/地區的境外管轄區，或者受到來自這些管轄區的訪問。此類管轄區可能設有不同的數據保護法，甚至未設立相關法律。在此類情況下，我們會確保您的個人資訊得到在中華人民共和國境內足夠同等的保護。例如，我們會請求您對跨境轉移個人資訊的同意，或者在跨境數據轉移之前實施數據去標識化等安全舉措。</p><p class="v_b_tit">七、本隱私權政策如何更新</p>
        <p class="inf_txt">我們可能適時會對本隱私權政策進行調整或變更，本隱私權政策的任何更新將以標註更新時間的方式公布在我們網站上，除法律法規或監管規定另有強制性規定外，經調整或變更的內容一經通知或公布後的7日後生效。如您在隱私權政策調整或變更後繼續使用我們提供的任一服務或訪問我們相關網站的，我們相信這代表您已充分閱讀、理解並接受修改後的隱私權政策並受其約束。</p><p class="v_b_tit">八、如何聯系我們</p>
        <p class="inf_txt">如果您對本隱私政策有任何疑問、意見或建議，通過以下方式與我們聯系：郵箱：【<a href="mailto:nihao@mingchu.co">nihao@mingchu.co</a> 】； 我們設立了個人資訊保護專職部門（或個人資訊保護專員），您可以通過以下電子信箱聯系：hello@greatchef.co 一般情況下，我們將在最晚三十個工作天內回復。</p>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, onBeforeMount, onMounted, toRefs } from 'vue'
// import utils from '@/utils/utils'
export default {
  setup(){
    const state = reactive({
      language:''
    })
    onBeforeMount(()=>{
      console.log("~~~~~~onBeforeMount~~~~~~");
    })
    onMounted(()=>{
      // utils.hideShare('1')
      // state.language = utils.browserLanguage()
      console.log("~~~~~~onMounted~~~~~~");
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss">
i{font-style: normal; font-weight: bold; color: #333}
.table{
  text-align: center;  table-layout:fixed;
  th{float: none; text-align: center; font-weight: bold;}
}

@function rem($px){
	@return $px*0.04*1rem;
}
// $rem:math.div(1, 25)*1rem;
.v_list_icon{ padding-top: rem(14*2); margin:0 rem(48*2) rem(14*2) rem(24*2); overflow: hidden; padding-left: rem(26*2); color: #757575;
	li{ float: left; width: 100%; line-height: 24px; font-size: 16px;
		&::before{ content: ''; float: left; width:rem(20*2); height: rem(20*2);  margin-left: rem(-27*2); margin-top: rem(5*2); font-family: MicrosoftYaHei; font-size: 18px; color: #c2a577; background:url('https://static.mingchu.co/webapp/images/eq/triangle.png') 5px center no-repeat; background-size: rem(40);}
		p{ position: relative; margin:0; padding: 0 0 0 rem(15*2); font-size:rem(16*2); line-height:rem(29*2); color:#4a4a4a; text-align:justify;}
	}
	span{ float: left; width: 28px; height: 24px; padding-left: 10px; font-family: MicrosoftYaHei; font-size: 18px; color: #c2a577; background:url('https://static.mingchu.co/webapp/images/eq/triangle.png') 5px center no-repeat; background-size: rem(40);}
}
.agreementWrapper{
  word-wrap:break-word
}
img{width: 100%;height: auto;}
ol{list-style: none;}
.inf_v_zhuc a{
  color: #ad8748;
}
video{
  position: fixed;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}
source{
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}

// @media (min-width: 1024px) {
//     body {
//         max-width: 1024px;
//         margin: 0 auto;
//         font-size: 16px !important;
//     }
//     html{font-size: 16px !important;}
// }
</style>
