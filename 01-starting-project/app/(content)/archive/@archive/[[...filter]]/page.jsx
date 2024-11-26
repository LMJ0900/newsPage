import NewsList from "@/components/newsList";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
export default function FilteredNewsPage({params}){
    const filter = params.filter

    const selectedYear = filter ? filter[0] : undefined //filter?.[0]
    const selectedMonth = filter ? filter[1] : undefined //filter.?[1]

    let news
    let links = getAvailableNewsYears()

    if(selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if(selectedYear && selectedMonth){
        news = getNewsForYearAndMonth(selectedYear,selectedMonth )
        links = []
    }

    let newsContent = <p>선택한 기간의 뉴스를 찾지 못했습니다</p>

    if(news && news.length > 0){
        newsContent = <NewsList news={news}></NewsList>
    }
    if(selectedYear && !getAvailableNewsYears().includes(+selectedYear) || selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)){
        throw new Error('유효하지 않은 필터입니다.')
    }
    return(<>
      <header id="archive-header">
        <nav>
            <ul>
            {links.map((link) => {
                const href = selectedYear ? `/archive/${selectedYear}/${link}` : `archive/${link}`

                return(<li key={link}>
                <Link href={href}>{link}</Link>
            </li>)
            })}
            </ul>
        </nav>
    </header>
    {newsContent}
    </>)
   
}