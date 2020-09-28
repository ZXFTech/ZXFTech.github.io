import Keyword from './Keyword'
import Link from 'next/link'

export default function KeywordsBlock({ keywords }) {
    return (
        <div className={styles.userKeywords}>
            {keywords && keywords.length && keywords.map((keyword, index) => {
                <Link href="/keyword/[keyword]" as={`/keyword/${keyword}`}>
                    <a>
                        <Keyword key={index} keyword={keyword} />
                    </a>
                </Link>
            })}
        </div>
    )
}