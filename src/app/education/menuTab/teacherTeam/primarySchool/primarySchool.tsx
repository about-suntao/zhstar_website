import React from 'react'
import styles from './primarySchool.module.scss'
import Image from 'next/image'

import img1 from '../../../../../../public/img/education/team/p1.webp'
import img2 from '../../../../../../public/img/education/team/p2.webp'
import img3 from '../../../../../../public/img/education/team/p3.webp'
import img4 from '../../../../../../public/img/education/team/p4.webp'

function PrimarySchool() {
  const data = [
    {
      id:1,
      title:'语文组',
      picture:img1,
      describe:'团结协作育桃李，携手并肩创佳绩。<br/> 语文教研组年轻老师居多，是一个充满活力、团结向上、富有钻研精神的团队 。我们始终坚信：教学注重水滴石穿，不能一蹴而就，所以我们潜心研究。在提高自身素质的同时，充分发挥备课组的集体智慧，每周集体备课，集思广益，群策群力，努力提高课堂教学效率，依托团队的智慧，在学习中成长，在思考中前行。'
    },{
      id:2,
      title:'英语组',
      picture:img2,
      describe:'英语教研组是一个充满活力、爱岗敬业、团结合作、富于创新、致力于英语特色教学的集体。全组现有教师8人，全组成员在共同教育理想的指引下，以爱心、细心、耐心及恒心对待每一个学生，以勤奋、严谨的治学态度带动学生，以以人为本、寓教于乐、学以致用为原则上好每一节课，深得学生的喜爱。<br/> 教育理念：精诚团结 与时俱进 创新求实  '
    },{
      id:3,
      title:'数学组',
      picture:img3,
      describe:'数学教研组是一个以青年教师为核心的朝气蓬勃、阳光向上、极具凝聚力的集体。我们教研组目标是致力使学生能爱上数学，感受到数学的乐趣无穷；发展学生的思维能力，让学生能感受数学，让学生终生受益。为了达到这个目标，教研组经常有针对的开展丰富多彩的教研活动。听课、评课、集体备课制度化；共同探讨教学教育方法，个性化教学，不断更新自己的教学观念。'
    },{
      id:4,
      title:'艺体组',
      picture:img4,
      describe:'希望之星小学部艺体教研组由9名教师组成，其中有音乐老师4名，体育老师3名，美术老师2名。<br/> 艺体组是学校中最有生气、最具创作力的团体，深受学生的喜爱。在学校开展的各类大型活动中艺体教研组的老师有着耐心爱心和良好的专业技能。全组教师潜心教学，致力于提高学生的身体素质、体育技能、审美能力和艺术修养。在教学、训练中老师们紧紧围绕学科教学要求和学生发展实际，以灵活的形式、丰富的内容激发学生学习热情，取得了良好的教学、训练效果。'
    },
  ]

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
       <ul>
         {
            data.map((item:any,index:any)=>{
              return (
                <li key={item.id}>
                  {
                  index%2===0 ?
                   <div className={styles.single}>
                     <div className={styles.picture}>
                      <Image src={item.picture} alt=''></Image>
                    </div>
                    <div className={styles.card}>
                      <h3>{item.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: item.describe }}></p>
                    </div>
                   </div>
                  :  <div className={styles.double}>
                        <div className={styles.card}>
                          <h3>{item.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: item.describe }}></p>
                        </div>
                        <div className={styles.picture}>
                          <Image src={item.picture} alt=''></Image>
                        </div>
                      </div>
                }
                </li>
              )
            })
          }
       </ul>
      </div>
    </div>
  )
}

export default PrimarySchool
