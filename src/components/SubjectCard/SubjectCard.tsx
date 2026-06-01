import './SubjectCard.scss'
import type { SubjectDetailCard } from '../../types'
import Markdown from 'react-markdown'
import SummaryRewards from '../SummaryRewards/SummaryRewards'

export default function SubjectCard({data}:{data:SubjectDetailCard}){
    return (
        <article className='subject-detail-card'>
            {"grimoireCardUrl" in data && data.grimoireCardUrl &&
                <img src={`/data/d1_icons${data.grimoireCardUrl}`} alt="" className='subject-card-grim'/>
            }
            <div className='subject-detail-card-inner'>
                <header className='subject-card-header'>
                    {"iconUrl" in data && data.iconUrl &&
                    <img src={`/data/d1_icons${data.iconUrl}`} alt="" className='subject-card-icon'/>
                }
                    <div className='subject-card-header-inner'>
                        <h3>{data.title}</h3>
                        {"subtitle" in data && data.subtitle &&
                            <p>{data.subtitle}</p>
                        }
                    </div>
                </header>
                <div className='subject-card-content'>
                    {"lightLevel" in data && data.lightLevel &&
                        <p className='subject-card-light'>Recommended Light: <span className='subject-card-light-val'>{data.lightLevel}</span></p>
                    }
                    {"description" in data && data.description &&
                        <div className='subject-card-description'>
                            <Markdown>{data.description}</Markdown>
                        </div>
                    }
                    {"quote" in data && data.quote &&
                        <div className='subject-card-quote'>
                            <Markdown>{data.quote}</Markdown>
                        </div>
                    }
                    {"summaryRewards" in data && data.summaryRewards.length >= 1 &&
                        <div className='subject-card-rewards'>
                            <h4>Rewards:</h4>
                            <ul>
                                <SummaryRewards rewardData={data.summaryRewards} />
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </article>
    )
}