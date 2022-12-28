import React from 'react';
import { SkillCard } from 'components';
import {
  CssSvg,
  ExpressSvg,
  FirebaseSvg,
  GithubSvg,
  GitSvg,
  HtmlSvg,
  JavascriptSvg,
  JestSvg,
  JsonWebTokenSvg,
  MongodbSvg,
  NodeSvg,
  NpmSvg,
  PassportJsSvg,
  PythonSvg,
  RailwaySvg,
  ReactSvg,
  ReduxSvg,
  TailwindcssSvg,
  TypescriptSvg,
  WebpackSvg,
} from 'svgs';

export const Skills = () => {
  return (
    <ul className='grid grid-cols-4 md:grid-cols-5 '>
      <SkillCard label='Javascript' svg={<JavascriptSvg />} />
      <SkillCard label='Typescript' svg={<TypescriptSvg />} />
      <SkillCard label='HTML' svg={<HtmlSvg />} />
      <SkillCard label='CSS' svg={<CssSvg />} />
      <SkillCard label='Python' svg={<PythonSvg />} />
      <SkillCard label='Tailwind' svg={<TailwindcssSvg />} />
      <SkillCard label='React' svg={<ReactSvg />} />
      <SkillCard label='Node' svg={<NodeSvg />} />
      <SkillCard label='MongoDB' svg={<MongodbSvg />} />
      <SkillCard bg='white' label='Express' svg={<ExpressSvg />} />
      <SkillCard label='Firebase' svg={<FirebaseSvg />} />
      <SkillCard label='Redux' svg={<ReduxSvg />} />
      <SkillCard label='Jest' svg={<JestSvg />} />
      <SkillCard label='Webpack' svg={<WebpackSvg />} />
      <SkillCard label='NPM' svg={<NpmSvg />} />
      <SkillCard label='Git' svg={<GitSvg />} />
      <SkillCard label='Github' bg='white' svg={<GithubSvg />} />
      <SkillCard label='PassportJS' svg={<PassportJsSvg bg='black' />} />
      <SkillCard label='JWT' bg='black' svg={<JsonWebTokenSvg />} />
      <SkillCard label='Railway' bg='black' svg={<RailwaySvg />} />
    </ul>
  );
};
