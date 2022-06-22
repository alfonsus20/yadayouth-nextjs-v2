import {
  ArrowRightIcon,
  SearchIcon,
  SortDescendingIcon
} from "@heroicons/react/outline";
import cn from "classnames";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ArticleCard, WideArticleCard } from "../../components/Card";
import IconButton from "../../components/IconButton";
import Input from "../../components/Input";
import { fetchArticles } from "../../models/article";
import { Article } from "../../types/entities/article";

type Props = {
  data: Array<Article>;
};

const Articles: NextPage<Props> = ({ data }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [isOpenSorting, setIsOpenSorting] = useState<boolean>(false);
  const router = useRouter();
  const { keyword: keywordParams, sortDirection } = router.query;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({ query: { ...router.query, keyword } });
  };

  let filteredArticles = data.filter((article) =>
    article.title
      .toLowerCase()
      .includes(((keywordParams as string) || "").toLowerCase())
  );

  const toggleSorting = () => {
    setIsOpenSorting((prev) => !prev);
  };

  const closeSorting = () => {
    setIsOpenSorting(false);
  };

  if (sortDirection === "ASC" || sortDirection === "DESC") {
    if (sortDirection === "ASC") {
      filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filteredArticles.sort((a, b) => b.title.localeCompare(a.title));
    }
  }

  useEffect(() => {
    if (keywordParams) {
      setKeyword(keywordParams as string);
    }
    if (sortDirection) {
      if (sortDirection !== "ASC" && sortDirection !== "DESC") {
        router.push({ query: { ...router.query, sortDirection: "" } });
      }
    }
  }, [router.query]);

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <Head>
        <title>Artikel</title>
      </Head>
      <section className="pt-6 pb-4 sm:pb-12 flex flex-col">
        <div className="flex justify-between sm:items-center mb-4 flex-col sm:flex-row gap-y-4">
          <h2 className="font-bold text-3xl text-black-light">Artikel Baru</h2>
          <form
            className="flex gap-2 items-center justify-center flex-wrap"
            onSubmit={handleSubmit}
          >
            <Input
              onChange={(e) => setKeyword(e.target.value)}
              variant="secondary"
              placeholder="Search"
              shape="pill"
              value={keyword}
              icon={<SearchIcon />}
              className="flex-auto"
            />
            <div className="relative">
              <IconButton
                type="button"
                icon={<SortDescendingIcon />}
                variant="secondary"
                shape="pill"
                onClick={toggleSorting}
              />
              <div
                className={cn(
                  "absolute top-full bg-white overflow-y-hidden transition-all flex flex-col items-center rounded-md z-20",
                  {
                    "max-h-[200px]": isOpenSorting,
                    "max-h-0": !isOpenSorting,
                  }
                )}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100",
                    { "bg-gray-100": sortDirection === "ASC" }
                  )}
                  onClick={() => {
                    router.push({
                      query: { ...router.query, sortDirection: "ASC" },
                    });
                    closeSorting();
                  }}
                >
                  A <ArrowRightIcon className="w-3 h-3" /> Z
                </button>
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100",
                    { "bg-gray-100": sortDirection === "DESC" }
                  )}
                  onClick={() => {
                    router.push({
                      query: { ...router.query, sortDirection: "DESC" },
                    });
                    closeSorting();
                  }}
                >
                  Z <ArrowRightIcon className="w-3 h-3" /> A
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {keywordParams || sortDirection ? (
        <section className="space-y-8">
          {filteredArticles.map((article) => (
            <WideArticleCard
              key={article.id}
              id={article.id}
              imageURL={article.articleImage}
              title={article.title}
              preview={article.preview}
            />
          ))}
        </section>
      ) : (
        <>
          <div className="mx-auto hidden sm:block pb-12">
            <div className="mb-4 relative mx-auto">
              <Image
                src={filteredArticles[0].articleImage}
                objectFit="cover"
                objectPosition="top"
                width={1200}
                height={600}
                className="rounded-lg"
                alt={filteredArticles[0].title}
              />
            </div>
            <div>
              <p className="text-2xl font-bold mb-2 text-black-light">
                {filteredArticles[0].title}
              </p>
              <p className="text-justify">{filteredArticles[0].preview}</p>
            </div>
          </div>
          <section className="flex gap-12 flex-wrap justify-center pb-12 sm:pb-20">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                imageURL={article.articleImage}
                title={article.title}
                preview={article.preview}
              />
            ))}
          </section>
        </>
      )}
      {filteredArticles.length === 0 && (
        <div className="py-20 text-center text-2xl">
          Artikel Tidak Ditemukan
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchArticles();

  return { props: { data: data.results } };
};

export default Articles;
