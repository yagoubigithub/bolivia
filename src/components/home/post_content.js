import React, { Component } from "react";
import { Card, Button } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class PostContent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card style={{margin : 4,padding : 4}}>
          <div className="header">
            <img
              src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png"
              alt="Quincy Larson's profile picture"
              className="profile-thumbnail"
            />
            <div className="profile-name">
              <h3>Quincy Larson</h3>
              <h4>@ossia</h4>
            </div>
            <div className="follow-btn">
              <Button>
                <ExpandMoreIcon />
              </Button>
            </div>
          </div>
          <div className="inner" dir="rtl">
<h2>بدأ شيلر بدأ شيلر </h2>
<p>بدأ شيلر في عام 1777 في مسرحيته الأولي اللصوص (بالألمانية: Die Räuber) تحت تأثير أفكار عصر التنوير. وفي هذه المسرحية يتجسد الرفض المطلق للسلطة المطلقة، والنزوع نحو الحرية الإنسانية من الاضطهاد والظلم الاجتماعي. وبذلك أصبح شيلر من الممثلين الأساسيين لأفكار حركة العاصفة والاندفاع «روحي ظامئة إلى الحرية».

وكان العرض المسرحي الأول لمسرحية شيلر اللصوص في 13 يناير 1782 في مانهايم، والذي نجح نجاحا أسطوريا جعلت من شيلر بين ليلة وضحاها من ألمع الشخصيات الأدبية في ألمانيا. وحين فرض الدوق كارل أويجين قرارا بمنع كتابات شيلر لما فيها من التحريض عبي الطغيان والاستبداد والدعوة إلي الحرية، قرر شيلر الهروب مع صديق صانع آلات الكمان شترايشر إلي مانهايم.

وهناك بدأ شيلر كتابة مسرحية جديدة هي فيسكو والتي اكتملت وعرضت في عام 1784. وأصابت شيلر في هذه الفترة أزمة مالية ونفسية، والتي نجح في اجتيازها وذلك بفضل عمله في صحيفة تاليا.وتوالت بعد ذلك أعماله الدرامية، فكتب دسيسة وحب التي ينقد فيها زيف المجتمع وقسوته. وكانت دوقية فايمار في ذلك الوقت عاصمة للأدب في ألمانيا ففيها غوته وهردر وفيلاند، وكان الدوق كارل أوجوست محبا للفن والمسرح، فازدهرت الحياة الفنية والأدبية في دوقيته.</p>
         
         <button>Read more</button>
          </div>
          <div className="footer">
  <div className="stats">
    
    <div className="likes">
      <strong>431</strong> Likes
     
    </div>
    <div className="shares">
    <strong>431</strong> shares
    </div>
  </div>
  <div className="cta">
    <Button variant="contained"style={{backgroundColor : "green",color : "white",margin : 4}} className="share-btn">Share</Button>
    
    <Button className="like-btn" style={{backgroundColor : "green",color : "white",margin : 4}}>Like</Button>
  </div>
</div>
        </Card>
      </React.Fragment>
    );
  }
}

export default PostContent;
