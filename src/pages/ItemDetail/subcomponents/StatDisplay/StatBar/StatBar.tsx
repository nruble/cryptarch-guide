import type { statPackage } from "../../../../../types"
import { Fragment } from "react/jsx-runtime"

export default function StatBar({stat}:{stat:statPackage}){
  const {statName, maximum, value, minimum } = stat
  const statId = `stat-label-${statName.replaceAll(" ", "-").toLocaleLowerCase()}`

  return(
    <Fragment>
      <dt id={statId}>{statName}</dt>
      <dd className='stat-meter' 
        role="meter"
        aria-valuemax={maximum}
        aria-valuenow={value}
        aria-valuemin={minimum}
        aria-valuetext={
          (maximum === value && minimum === value)
          ? `Stat value of ${value}.`
          : `Stat range from ${
            minimum < value 
            ? minimum 
            : value
          } to ${
            maximum > value 
            ? maximum 
            : value
          }. Base value of ${value}.`
        }
        aria-labelledby={statId}
      >
        {maximum > value && 
          <span className="stat-meter-max" style={{'width':`${maximum}%`}} aria-hidden></span>
        }
        <span className="stat-meter-base" style={{'width':`${value}%`}} aria-hidden></span>
        {minimum < value && 
          <span className="stat-meter-min" style={{'width':`${minimum}%`}} aria-hidden></span>
        }
      </dd>
      <dd aria-describedby='stat-min-label' aria-hidden >{minimum < value && minimum}</dd>
      <dd className='stat-vertical-rule' aria-hidden></dd>
      <dd aria-describedby='stat-base-label' aria-hidden>{value}</dd>
      <dd className='stat-vertical-rule' aria-hidden></dd>
      <dd aria-describedby='stat-max-label' aria-hidden>{maximum > value && maximum}</dd>
    </Fragment>
  )
}