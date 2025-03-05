
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = $request.url;
const method = $request.method;

if (url.includes("/GetTrainingClass") && method === "GET") {
  try {
    let body = JSON.parse($response.body);
    
    // 防御性检查
    if (body?.Data?.List?.[0]) {
      console.log(`原始 Organizers: ${body.Data.List[0].Organizers}`);
      body.Data.List[0].Organizers = "修改测试";
      body.Data.List[0].Name = "低压电工教程";
      console.log(`修改后 Organizers: ${body.Data.List[0].Organizers}`);
    } else {
      console.log("Data.List 为空或结构异常");
    }
    
    $done({ body: JSON.stringify(body) });
  } catch (error) {
    console.log("JSON 解析失败: " + error.message);
    $done({});
  }
} else {
  $done({});
}
