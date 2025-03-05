
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = $request.url;
const method = $request.method;

if (url.includes("/GetTrainingClass") && method === "GET") {
  try {
    // 解析原始响应体
    let body = JSON.parse($response.body);
    
    // 修改 Data.List[0] 的字段
    if (body?.Data?.List?.[0]) {
      body.Data.List[0].Organizers = "修改测试";
      body.Data.List[0].Name = "低压电工教程";
    }
    
    // 返回修改后的响应体
    $done({ body: JSON.stringify(body) });
  } catch (error) {
    console.log(`处理失败: ${error}`);
    $done({});
  }
} else {
  $done({});
}