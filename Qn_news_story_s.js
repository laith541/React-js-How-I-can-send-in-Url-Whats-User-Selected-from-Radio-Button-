import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import axios, { Axios } from 'axios';
import parse from "html-react-parser";
import { Link, useNavigate } from "react-router-dom";
import {variables} from './Variables.js';
import "bootstrap-icons/font/bootstrap-icons.css";
 
 

export default function Press_Release_Distribution() {

  


    const [str_html, setstr_html] = useState('');
    const [more_html, setmore_html] = useState('');
    const [most_html, setmost_html] = useState('');
    const [HomeB1, setHomeB1] = useState('');
    const [HomeB2, setHomeB2] = useState('');
    const [HomeB3, setHomeB3] = useState('');
    const [top1, settop1] = useState('');
    const [top2, settop2] = useState('');
    const [top3, settop3] = useState('');
    const [space1, setspace1] = useState('');
    const [footer_ads, setfooter_ads] = useState('');

    const [isLoading,setNisLoading] = useState(false);
    const navigate = useNavigate();
    const usenavigate=useNavigate();
    const [newsTitle, setsnewsTitle] = useState('');
    const [newsDate, setnewsDate] = useState();
    const [imagePath, setimagePath] = useState('');
    const [newsBody, setnewsBody] = useState('');
    const [news_img_caption, setnews_img_caption] = useState('');
    const [JsonSchema, setJsonSchema] = useState('');
    const [providerName, setproviderName] = useState('');
    const [providerLogo, setproviderLogo] = useState('');
    const [org_link, setorg_link] = useState('');
    const [newsLink, setnewsLink] = useState('');

 const [tit,settit]=useState('');

    const [p_website, setp_website] = useState('');
    const [newsDisclaimer, setnewsDisclaimer] = useState('');
    const [p_Meta, setp_Meta] = useState('');
    const [googlebot, setgooglebot] = useState('');
    const [news_type, setnews_type] = useState('');
    const [story_meta, setstory_meta] = useState('');


    // In Normal Mode All of thing Visible 
    const [isVisible, setIsVisible] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState(true);
     //
 

    const params = new URLSearchParams(window.location.search)  

    let storyID = params.get('storyID')  ;
    let title = params.get('title')  ;
    let social = params.get('social')  ;
    let url_path = window.location.search ;

   if( !params.has('storyID')  || storyID === '' ){
    window.location.href = "https://menafn.com/";
 
   }
   if( !params.has('title')  || title === '' ){
    window.location.href = "https://menafn.com/";
 
   }
    

  
     async function refda() {  

     
        setNisLoading(true);
        let jwttoken = Cookies.get('jwttoken');
         
        axios.get(variables.API_URL+ '/external_site/load_html' , {
       
            headers:{'Authorization':'bearer ' + jwttoken },
            params: {
                File_name: 'NewsEN_MostPopular.html' 
                 
            }   
        })
            .then(function (response) {
                setNisLoading( false);
          
                setmost_html(response.data);
            })


            axios.get(variables.API_URL+ '/external_site/load_html' , {
       
                headers:{'Authorization':'bearer ' + jwttoken },
                params: {
                    File_name: 'NewsEn_MoreStories.html' 
                     
                }   
            })
                .then(function (response) {
                    setNisLoading( false);
              
                    setmore_html(response.data);
                })

                axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                  headers:{'Authorization':'bearer ' + jwttoken },
                  params: {
                    ID:"HomeB1",
                    p_Banner_inc:"30" ,
                    p_banner_layout:"HomeB"
                  }   
              })
                  .then(function (response) {
                      setNisLoading( false);
               
                      setHomeB1(response.data);
                  })

                  
                axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                  headers:{'Authorization':'bearer ' + jwttoken },
                  params: {
                    ID:"HomeB2",
                    p_Banner_inc:"30" ,
                    p_banner_layout:"HomeB"
                  }   
              })
                  .then(function (response) {
                      setNisLoading( false);
               
                      setHomeB2(response.data);
                  })

                  axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                    headers:{'Authorization':'bearer ' + jwttoken },
                    params: {
                      ID:"HomeB3",
                      p_Banner_inc:"30" ,
                      p_banner_layout:"HomeB"
                    }   
                })
                    .then(function (response) {
                        setNisLoading( false);
                 
                        setHomeB3(response.data);
                    })
  
                    
                      
                    axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                      headers:{'Authorization':'bearer ' + jwttoken },
                      params: {
                        ID:"space1",
                        p_Banner_inc:"30" ,
                        p_banner_layout:"space"
                      }   
                  })
                      .then(function (response) {
                          setNisLoading( false);
                   
                          setspace1(response.data);
                      })


                      axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                        headers:{'Authorization':'bearer ' + jwttoken },
                        params: {
                          ID:"top1",
                          p_Banner_inc:"30" ,
                          p_banner_layout:"topl"
                        }   
                    })
                        .then(function (response) {
                            setNisLoading( false);
                     
                            settop1(response.data);
  
                             const list = document.getElementById("adsdiv");
          
                              list.innerHTML  =     list.innerHTML + response.data;
  
                        })
  


                        axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                          headers:{'Authorization':'bearer ' + jwttoken },
                          params: {
                            ID:"top2",
                            p_Banner_inc:"30" ,
                            p_banner_layout:"topl"
                          }   
                      })
                          .then(function (response) {
                              setNisLoading( false);
                       
                              settop2(response.data);

                              
                              
                          
    
    
                          })
                          

                          axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                            headers:{'Authorization':'bearer ' + jwttoken },
                            params: {
                              ID:"top3",
                              p_Banner_inc:"30" ,
                              p_banner_layout:"topl"
                            }   
                        })
                            .then(function (response) {
                                setNisLoading( false);
                        
                                settop3(response.data);
  
                                  
                            })


                          axios.get(variables.API_URL+ '/external_site/load_ads' , {
       
                            headers:{'Authorization':'bearer ' + jwttoken },
                            params: {
                              ID:"footer_ads",
                              p_Banner_inc:"30" ,
                              p_banner_layout:"topl"
                            }   
                        })
                            .then(function (response) {
                                setNisLoading( false);
                         
                                setfooter_ads(response.data);
  
                                const list = document.getElementById("footer_bot");
            
                                list.innerHTML  =     list.innerHTML + response.data;
    
                                
                            
      
      
                            })



                  axios.get(variables.API_URL+ '/external_site/qn_news_story_s_show_story_data' , {
       
                    headers:{'Authorization':'bearer ' + jwttoken },
                    params: {
                      storyid: storyID,
                      title: title,
                      lang: 'en',
                      social: social
                    }   
                })
                    .then(function (response) {
                   
                       console.log('story data');
                       console.log(response.data );
                       console.log(response.data.Item1[0].Accepted);
                       console.log(response.data.Item1[0].newsID);
                        
              

setsnewsTitle(response.data.Item1[0].newsTitle);
setnewsBody(response.data.Item1[0].newsBody)     ;  
setnewsDate(response.data.Item1[0].newsDate.replace('T',' '))   ;
setimagePath(response.data.Item1[0].imagePath)   ;

setnews_img_caption(response.data.Item1[0].news_img_caption);
setproviderLogo(response.data.Item1[0].providerLogo);
setorg_link(response.data.Item1[0].org_link);
settit(response.data.Item2.Meta_OG_Title);

  
             
              }).catch((err) => {
                // This Alert just  for Rememmber this is Error Div Message 
                // alert('  Please insert A valid id  :' + err.message);
                 setIsVisible(true);
                setErrorMessage(false);
              });




                  
           }
  
  
    

 

     
   
   
      useEffect(() => {

       
       
        setNisLoading(true);
   
        refda();
           },[] )
   
           const { storyIDd } = useQueryParams();

           function useQueryParams() {
             const params = new URLSearchParams(window ? window.location.search : {});
           
             return {
               storyIDd: params.get('storyId'), // Adjust the key based on your URL structure
             };
           }
           
           
           


// news letter part

           const [English, setEnglish] = useState("En");
           const onChangeEnglish = (ev) => {
             //save your value here with state variable
             console.log("Daily English :",ev.target.value);
             setEnglish(ev.target.value);
           };
         
       
           const [Arabic, setArabic] = useState("Ar");
           const onChangeArabic = (ev) => {
             //save your value here with state variable
             console.log("Daily Arabic :",ev.target.value);
          
             setArabic(ev.target.value);

             console.log(Arabic);
             
           };
         
       
           const [AllLang, setAllLang] = useState("All");
           const onChangeAllLang = (ev) => {
             //save your value here with state variable
             console.log("AllLang is:",ev.target.value);
             setAllLang(ev.target.value);
           };
         
           const [Email, setEmail] = useState(0);
           const onChangeEmail = (ev) => {
             //save your value here with state variable
             console.log("User Email is : ",ev.target.value);
             setEmail(ev.target.value);
           };
        
        
           // DetermineValue

     







// Part of Subscribe
           
const [selectedLang, setSelectedLang] = useState('');
const [Lang, setLang] = useState('');

// Update selectedLang when a radio button is clicked
const handleRadioChange = (event) => {
  setSelectedLang(event.target.value);

  // Set additionalString based on the selected language
  if (event.target.value === 'En') {
    setLang('En');
  } else if (event.target.value === 'Ar') {
    setLang('Ar');
  }
  else if (event.target.value === 'All') {
    setLang('All');
  }
  
  
  
  else {
    setLang('...');
  }
};

     


      
            
         
 



            // Redirect to the new URL
    
     //End Part of Subscribe
       
 
          
 
 
 
           return (
          <>
   <title>{tit}</title>
   
   <section className="main-wrapper single-category classHeightImportant"   >

  {/* ErrorMessage part */}
  <div className='text-center' hidden={ErrorMessage}  >
     <div className='container ' >
<div> <img className='MarginIMG text-left' src="https://menafn.com//includes/img/error-logo-left.png"/>   <div className='Style403'>403</div>
</div>
 
<div>


  
<div class="SorryStyle text-left">Sorry!!</div>
  <div class="ErrorTextStyle">
  Error! We're sorry, but the page you were
looking for doesn't exist.
</div>
  </div>
  </div>
  </div>
{/* End  ErrorMessage part */}


{/* Dont Forget we hidden main div if we have a error */}
   <div id="HiddenMainDiv"   >


     <div className="container classHeightImportant">



       <div id="ContentPlaceHolder1_div_story" className="col-sm-9  ">  
         <div className='text-center'>
           <a href="./css/KT_7ad17image_story.jpg" id="ContentPlaceHolder1_img_link" target="_blank">
             <img id="ImgNews" className='classwidth835' alt={news_img_caption} title={newsTitle}  src={imagePath}  />
           </a>
         </div>
         <div className="col-sm-12">
           <h1 className="main-entry-title classfont38"> {newsTitle}</h1>
           <br /><p id="ContentPlaceHolder1_author_section" /> 
         </div>
         <div className="entry-blog-meta mt-0" hidden={isVisible}>
           <div className="entry-blog-meta-list">                    
             <div className="author-avatar-text">
               <p className="author"> <a href={url_path} title="Posts by NewEdge" rel="author">Date</a></p>
               <span className="entry-date">{newsDate}</span>
               <span className="cats" />
             </div>
           </div> {/* //entry-blog-meta-list */}
           <div   id="ContentPlaceHolder1_social_edg" className="entry-blog-meta-list"    >
             <div className="share-count" >
             </div>
             <div className="newedge-social-share"  >
               <ul  >
                 <li>
                 </li><li><a href="https://www.facebook.com/sharer/sharer.php?u=https://menafn.com/1107659256/Look-Boats-Form-UAE-Off-Abu-Dhabi-Beach-To-Set-World-Record" className="icon-facebook class21"> Share on Facebook</a></li>
                 <li>
                 </li><li><a href="https://twitter.com/intent/tweet?url=https://menafn.com/1107659256/Look-Boats-Form-UAE-Off-Abu-Dhabi-Beach-To-Set-World-Record" className="icon-twitter">  <i class="bi bi-twitter class21"></i> Tweet on Twitter</a></li>
                 <li>
                 </li><li ><a href="whatsapp://send?text=https://menafn.com/1107659256/Look-Boats-Form-UAE-Off-Abu-Dhabi-Beach-To-Set-World-Record" data-action="share/whatsapp/share" className="float"> <i class="bi bi-whatsapp class21"></i></a></li>
                 <li>
                 </li><li><a className="icon-linkedin" title="Share on linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=menafn.com/1107659256/Look-Boats-Form-UAE-Off-Abu-Dhabi-Beach-To-Set-World-Record"  ><i class="bi bi-linkedin class21"></i></a></li>
               </ul> 
             </div> 
           </div> {/* //entry-blog-meta-list */}
         </div> {/* //entry-blog-meta */}
         <div className="entry-summary  ">
         </div> 
         <div className="entry-summary tit " >
         {parse(newsBody)} 
              <br />
         </div> 
         <div className="entry-summary  ">
         </div>
         <div className="entry-summary  ">
         </div>
         <div className='mb-4'>
           <div className="entry-summary  ">
           </div>
           <div className="entry-summary  ">
           </div>
         </div>
         <div className='mb-4'>
           <div className="entry-summary  ">
           </div>
           <div className="entry-summary  ">
           </div>
         </div>
         <div className='mb-5'>
           <div className="entry-summary  ">
           </div>
           <div className="entry-summary  " >
           </div>
         </div>
         <a  href={org_link}   id="ContentPlaceHolder1_a_logo_anchor" target="_blank" className="ex1 aColor">
           <img src={providerLogo} id="ContentPlaceHolder1_img_logo_anchor" border={0} />
           <h2 className="main-entry-title classfont38"> 
           </h2> 
         </a>
         <div className="entry-summary  "  hidden={isVisible} >
           <p>
             <b >Legal Disclaimer:</b><br /> <a    href="https://menafn.com/" target="_blank">MENAFN</a> provides the information “as is” without warranty of any kind.  We do not accept any responsibility or liability for the accuracy, content, images, videos, licenses, completeness, legality, or reliability of the information contained in this article.   If you have any complaints or copyright issues related to this article, kindly contact the provider above. 
           </p>
         </div>
         <p /> 
         <div className="post-meta-info"  hidden={isVisible}>
           <div className="post-meta-info-list tags">
             <i className="fa fa-tags" />
             <div className="post-meta-info-list-in tags-in">
               <p>Tags</p>
               <span id="ContentPlaceHolder1_lbl_hashtags">Label</span>
             </div>
           </div>
           <div className="post-meta-info-list comments">
             <i className="fa fa-comments-o" />
             <div className="post-meta-info-list-in comments-in">
               <p>Comments</p>
               <a href="https://menafn.com/1107659256/Look-Boats-Form-UAE-Off-Abu-Dhabi-Beach-To-Set-World-Record#"><span className="leave-reply">No comment</span></a>
             </div>
           </div>
           <div className="post-meta-info-list category">
             <i className="fa fa-folder-open-o" />
             <div className="post-meta-info-list-in category-in">
               <p>Category</p>
               <a href="https://menafn.com/1107659256/Look-Boats-Form-UAE-Off-Abu-Dhabi-Beach-To-Set-World-Record#" rel="category tag"><span id="ContentPlaceHolder1_lblb_cats" /></a>
             </div>
           </div>
           <div className="post-meta-info-list date">
             <i className="fa fa-calendar-o" />
             <div className="post-meta-info-list-in date-in">
               <p>Date</p>
               <time className="entry-date"><span id="ContentPlaceHolder1_lbl_date_story">{newsDate}</span></time>
             </div>
           </div>
         </div> {/* //post-meta-info */}
       </div> {/* //col-sm-9 */}  
       <div className="col-sm-3 "  hidden={isVisible}>
         <div id="ContentPlaceHolder1_Rightcol">
          
           <div id="RColFirtsSquareBanner" className="market-data mtt30 mt-0" >
             <div id="sqaur1"> 
             <div  dangerouslySetInnerHTML={{ __html:  HomeB1 }} /> 
             
             </div>
           </div>
      
      
           <div id="RColRSS" className="latest-comments mtt60"  hidden={isVisible}>
             <div className="section-title">
               <div className="card " id="div_mostPop" >
               <div  dangerouslySetInnerHTML={{ __html:   most_html }} /> 
               </div>
             </div>
           </div>
           <div id="Div1" className="market-data mtt30 mt-0">
             <div id="sqaur2"> 
             <div  dangerouslySetInnerHTML={{ __html:  HomeB2 }} /> 
             </div>
           </div>
           {/* Social counter */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <div id="RColStayConnected" className="social-counter mtt30" style={{width: '300px'}}>
             {/* //section-title */}
             <div id="div_HomeEn_FXStockMarketshtml">
               <div>
                 <h4 className="heading-large-left text-left">
                   Market Research</h4>
                 <br />
                 <img src="https://menafn.com/Updates/Alliance.png" className="img-100p" alt="Market Research" /> 
                 <div>
                   <br />
                   <ul className="popular-news-list">
                     <li><a href="https://menafn.com/1107436795/China-Nutritional-Supplement-Market-Size-Research-Report-By-Basic-Information-Competitors-And-Forecast-To-2032" target="News">China Nutritional Supplement Market Size, Research Report By Basic Inform...</a></li>
                     <li><a href="https://menafn.com/1107436758/Saudi-Arabia-Biodegradable-Films-Market-Share-Growth-Statistics-Size-Key-Players-And-Forecast-To-2023-To-2032" target="News">Saudi Arabia Biodegradable Films Market Share, Growth Statistics, Size, K...</a></li>
                     <li><a href="https://menafn.com/1107436721/Saudi-Arabia-Bath-And-Shower-Product-Market-Upcoming-Trends-Size-Key-Players-Revenue-Overview-And-Forecast-To-2023-To-2032" target="News">Saudi Arabia Bath And Shower Product Market Upcoming Trends, Size, Key Pl...</a></li>
                     <li><a href="https://menafn.com/1107436767/Saudi-Arabia-Offset-Printing-Market-Latest-Trends-Size-Key-Players-Revenue-Growth-And-Forecast-To-2023-To-2032" target="News">Saudi Arabia Offset Printing Market Latest Trends, Size, Key Players, Rev...</a></li>
                     <li><a href="https://menafn.com/1107436735/Asia-Pacific-Advanced-Driver-Assistance-Systems-ADAS-Market-Key-Players-Set-For-Significant-Industry-Revenue-Growth-Till-2032" target="News">Asia-Pacific Advanced Driver Assistance Systems (ADAS) Market Key Players...</a></li>
                     <li><a href="https://menafn.com/1107436762/Saudi-Arabia-Wax-Dispersants-Market-Latest-Trends-Size-Share-Growth-Analysis-And-Forecast-To-2023-To-2032" target="News">Saudi Arabia Wax Dispersants Market Latest Trends, Size, Share, Growth An...</a></li>
                     <li><a href="https://menafn.com/1107436790/Saudi-Arabia-Aldehyde-Market-Report-Outlook-Growth-Key-Players-Revenue-And-Forecast-To-2023-To-2032" target="News">Saudi Arabia Aldehyde Market Report Outlook, Growth, Key Players, Revenue...</a></li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* //row */}
           </div>
           {/* //social counter */}
         </div>
       </div>
       {/* Advertisement two */}
       <div className="container classAds2">
         <div>
           <div className="col-sm-12 text-center" >
             <div id="bot"> 
             <div  dangerouslySetInnerHTML={{ __html:  top3 }} /> 
             </div>
           </div>
         </div>
       </div> 
       {/* //Advertisement two */}
       <div className="container"  hidden={isVisible}>
         <div>
   
   
           <div className="col-sm-9  " >
             
             <div className="mtt30">
               <div className="section-title  " >
                 <h3 className="heading-large-left">More Stories</h3>
               </div>
               <div  dangerouslySetInnerHTML={{ __html:   more_html }} /> 
               {/* //section-title */}   
             </div> {/* //row */}
           </div>
   
 
   
           <div className="col-sm-3 classnewsletter1">
             <div id="RColNewslatter" className="newedge-newsletter classnewletterwidth"  >
               {/* newedge-newsletter */}
               <div className="introtext">
                 <h2 className="title">
                   Newsletter</h2>
                 <p className="footer-info">
                 </p><div className="radio">
                   <label>
                     <input  
                     
                          type="radio"
                          value="En"
                          checked={selectedLang === 'En'}
                          onChange={handleRadioChange}
                     />
                     Daily(English)
                   </label>
                 </div>

             


                 <div className="radio">
                   <label>
                     <input 
                      
                      type="radio"
                      value="Ar"
                      checked={selectedLang === 'Ar'}
                      onChange={handleRadioChange}
                        
                     />
                     Daily(Arabic)
                   </label>
                 </div>
                 <div className="radio">
                   <label>
                     <input  
                     
                     type="radio"
                     value="All"
                     checked={selectedLang === 'All'}
                     onChange={handleRadioChange}
                       />
                     All()
                   </label>
                 </div>
                 <p />
               </div>
               <div className="form">
                 <input   onChange={onChangeEmail}   name="ctl00$ContentPlaceHolder1$txt_news_letter" type="text" id="ContentPlaceHolder1_txt_news_letter" placeholder="E-mail" className="form-control"   />
                 <br />
               
                    
                 <a    href={'https://menafn.com/nl_sub.aspx?email='+Email+'&lang='+Lang} name="ctl00$ContentPlaceHolder1$btn_newsletter"   id="ContentPlaceHolder1_btn_newsletter" className="btn SubscribeBody" >Subscribe</a>
               
               
               </div>
             </div>
             <div id="RColSpaceBanner" className="advertisement mtt30 ">
               <div id="adsdiv"> 
               
               <div  dangerouslySetInnerHTML={{ __html:   space1 }} /> 
   
                </div>
             </div>
           </div>
         </div>        
       </div>
     </div> {/* //End container */}

     </div>  {/* //End Of Main Hidden Dev  */}




 





   </section>
 


         </>
        );
    }


  
